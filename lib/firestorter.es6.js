/** Firestorter - (c) Hein Rutjes 2017 - 2019 - MIT Licensed */
import { observable, onBecomeUnobserved, onBecomeObserved, runInAction, toJS, reaction, makeObservable, computed, autorun } from 'mobx';
import { deleteField, getFirestore as getFirestore$1, updateDoc, setDoc, deleteDoc, onSnapshot, doc, getDoc, getDocs, addDoc, collection, query, where } from 'firebase/firestore';
import { getApp } from 'firebase/app';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

/**
 * Real-time updating mode.
 * @type Mode
 */
var Mode;
(function (Mode) {
    Mode["Auto"] = "auto";
    Mode["On"] = "on";
    Mode["Off"] = "off";
})(Mode || (Mode = {}));

const isEqual = require('lodash.isequal');
/**
 * Helper function which merges data into the source
 * and returns the new object.
 *
 * @param {Object} data - JSON data
 * @param {Object} fields - JSON data that supports field-paths
 * @return {Object} Result
 */
function mergeUpdateData(data, fields, _hasContext) {
    const res = Object.assign({}, data);
    const canonicalDelete = deleteField();
    for (const key in fields) {
        if (fields.hasOwnProperty(key)) {
            const val = fields[key];
            const isDelete = canonicalDelete.isEqual
                ? canonicalDelete.isEqual(val)
                : isEqual(canonicalDelete, val);
            const paths = key.split('.');
            let dataVal = res;
            for (let i = 0; i < paths.length - 1; i++) {
                if (dataVal[paths[i]] === undefined) {
                    if (isDelete) {
                        dataVal = undefined;
                        break;
                    }
                    dataVal[paths[i]] = {};
                }
                else {
                    dataVal[paths[i]] = Object.assign({}, dataVal[paths[i]]);
                }
                dataVal = dataVal[paths[i]];
            }
            if (isDelete) {
                if (dataVal) {
                    delete dataVal[paths[paths.length - 1]];
                }
            }
            else {
                dataVal[paths[paths.length - 1]] = val;
            }
        }
    }
    return res;
}
function verifyMode(mode) {
    switch (mode) {
        case 'auto':
        case 'off':
        case 'on':
            return mode;
        default:
            throw new Error('Invalid mode mode: ' + mode);
    }
}
/**
 * Checks whether the provided value is a valid Firestore Timestamp or Date.
 *
 * Use this function in combination with schemas, in order to validate
 * that the field in the document is indeed a timestamp.
 *
 * @param {Object} val - Value to check
 * @return {Boolean}
 *
 * @example
 * import { isTimestamp } from 'firestorter';
 *
 * const TaskSchema = struct({
 *  name: 'string',
 *  startDate: isTimestamp,
 *  duration: 'number'
 * });
 *
 * const doc = new Document('tasks/mytask', {
 *   schema: TaskSchema
 * });
 * await doc.fetch();
 * console.log('startDate: ', doc.data.startDate.toDate());
 */
function isTimestamp(val) {
    if (val instanceof Date) {
        return true;
    }
    return (typeof val === 'object' &&
        typeof val.seconds === 'number' &&
        typeof val.nanoseconds === 'number');
}

/**
 * @ignore
 * Creates an observable which calls addObserverRef &
 * releaseObserverRef methods on the passed-in delegate class.
 * Effectively, this allows Firestorter to track whether
 * a Collection/Document is observed and real-time updating
 * needs to be enabled on it.
 */
function enhancedObservable(data, delegate) {
    const o = Array.isArray(data) ? observable.array(data) : observable.box(data);
    let isObserved = false;
    onBecomeUnobserved(o, undefined, () => {
        if (isObserved) {
            isObserved = false;
            delegate.releaseObserverRef();
        }
    });
    onBecomeObserved(o, undefined, () => {
        if (!isObserved) {
            isObserved = true;
            delegate.addObserverRef();
        }
    });
    return o;
}

const ModuleName = 'firestorter';
let globalContext;
/**
 * Initializes `firestorter` with the firebase-app.
 *
 * @param {Object} config - Configuration options
 * @param {Firebase} config.firebase - Firebase reference
 * @param {String|FirebaseApp} [config.app] - FirebaseApp to use (when omitted the default app is used)
 *
 * @example
 * import {initializeApp} from 'firebase/app';
 * import {initFirestorter, Collection, Document} from 'firestorter';
 *
 * // Initialize firebase app
 * const firebaseApp = initializeApp({...});
 *
 * // Initialize `firestorter`
 * initFirestorter({app: firebaseApp});
 *
 * // Create collection or document
 * const albums = new Collection('artists/Metallica/albums');
 * ...
 * const album = new Document('artists/Metallica/albums/BlackAlbum');
 * ...
 */
function initFirestorter(config) {
    if (globalContext) {
        throw new Error('Firestorter already initialized, did you accidentally call `initFirestorter()` again?');
    }
    globalContext = makeFirestorterContext(config);
}
/**
 * If you need to use different firestore instances for different
 * collections, or otherwise want to avoid global state, you can
 * instead provide a "context" option when creating Document and
 * Collection instances.
 *
 * This function takes the same arguments as `initFirestorter` and returns
 * a context suitable for Document and Collection creation.
 *
 * @example
 * import * as firebase from 'firebase/app';
 * import 'firebase/firestore'
 * import * as firetest from '@firebase/testing'
 * import { makeFirestorterContext, Collection, Document } from "firestorter"
 *
 * function makeTestContext(fbtestArgs) {
 * 	 const app = firetest.initializeTestApp(fbtestArgs)
 *   return makeFirestorterContext({
 *     firestore,
 *     app,
 *   })
 * }
 *
 * // create collection or document without global state
 * test('collection and document using different apps', () => {
 *   const context1 = makeTestContext({ projectId: 'foo' })
 *   const context2 = makeTestContext({ projectId: 'bar' })
 *
 *   // Create collection or document
 *   const albums = new Collection('artists/Metallica/albums', {context: context1});
 *   ...
 *   const album = new Document('artists/Metallica/albums/BlackAlbum', {context: context2});
 *   ...
 * })
 */
function makeFirestorterContext(config) {
    // Get app instance
    const firebaseApp = (config === null || config === void 0 ? void 0 : config.app)
        ? typeof config.app === 'string'
            ? getApp(config.app)
            : config.app
        : getApp();
    // Get firestore instance
    const firestore = (config === null || config === void 0 ? void 0 : config.firestore) || getFirestore$1(firebaseApp);
    if (!firestore) {
        throw new Error("getFirestore() returned `undefined`, did you forget `import 'firebase/firestore';` ?");
    }
    // Verify existence of firestore & fieldvalue
    try {
        deleteField();
    }
    catch (err) {
        throw new Error('Invalid `firebase` argument specified: `FieldValue.delete` does not exist');
    }
    return {
        app: firebaseApp,
        firestore,
    };
}
function getContext(obj) {
    if (obj === null || obj === void 0 ? void 0 : obj.context) {
        return obj.context;
    }
    if (globalContext) {
        return globalContext;
    }
    if (obj) {
        throw new Error(`No context for ${obj} or globally. Did you forget to call \`initFirestorter\` or pass {context: ...} option?`);
    }
    throw new Error(`No global Firestore context. Did you forget to call \`initFirestorter\` ?`);
}
function contextWithProperty(key, obj) {
    try {
        const context = getContext(obj);
        if (context[key]) {
            return context;
        }
        throw new Error(`Context does not contain ${key}`);
    }
    catch (err) {
        throw new Error(`${ModuleName}: cannot get ${key}: ${err}`);
    }
}
function getFirebaseApp(obj) {
    return contextWithProperty('app', obj).app;
}
function getFirestore(obj) {
    return contextWithProperty('firestore', obj).firestore;
}

const isEqual$1 = require('lodash.isequal');
/**
 * @private
 */
function resolveRef(value, hasContext) {
    if (typeof value === 'string') {
        return doc(getFirestore(hasContext), value);
    }
    else if (typeof value === 'function') {
        return resolveRef(value(), hasContext);
    }
    else {
        return value;
    }
}
const EMPTY_OPTIONS = {};
/**
 * Document represents a document stored in the firestore database.
 * Document is observable so that it can be efficiently linked to for instance
 * a React Component using `mobx-react`'s `observer` pattern. This ensures that
 * a component is only re-rendered when data that is accessed in the `render`
 * function has changed.
 *
 * @param {DocumentSource} [source] String-path, ref or function that returns a path or ref
 * @param {Object} [options] Configuration options
 * @param {String} [options.mode] See `Document.mode` (default: auto)
 * @param {Function} [options.schema] Superstruct schema for data validation
 * @param {firestore.DocumentSnapshot} [options.snapshot] Initial document snapshot
 * @param {firestore.SnapshotOptions} [options.snapshotOptions] Options that configure how data is retrieved from a snapshot
 * @param {boolean} [options.debug] Enables debug logging
 * @param {String} [options.debugName] Name to use when debug logging is enabled
 */
class Document {
    constructor(source, options = {}) {
        const { schema, snapshot, snapshotOptions, mode, debug, debugName, context } = options;
        this.debugInstanceName = debugName;
        this.sourceInput = source;
        this.ctx = context;
        this.refObservable = observable.box(resolveRef(source, this));
        this.docSchema = schema;
        this.isVerbose = debug || false;
        this.snapshotObservable = enhancedObservable(snapshot, this);
        this.snapshotOptions = snapshotOptions;
        this.collectionRefCount = 0;
        this.observedRefCount = 0;
        let data = snapshot ? snapshot.data(this.snapshotOptions) : undefined;
        if (data) {
            data = this._validateSchema(data);
        }
        this.dataObservable = enhancedObservable(data || EMPTY_OPTIONS, this);
        this.modeObservable = observable.box(verifyMode(mode || Mode.Auto));
        this.isLoadingObservable = observable.box(false);
        this._updateSourceObserver();
        if (mode === Mode.On) {
            runInAction(() => this._updateRealtimeUpdates());
        }
    }
    /**
     * Returns the superstruct schema used to validate the
     * document, or undefined.
     *
     * @type {Function}
     */
    get schema() {
        return this.docSchema;
    }
    /**
     * Returns the data inside the firestore document.
     *
     * @type {Object}
     *
     * @example
     * todos.docs.map((doc) => {
     *   console.log(doc.data);
     *   // {
     *   //   finished: false
     *   //   text: 'Must do this'
     *   // }
     * });
     */
    get data() {
        return this.dataObservable.get();
    }
    /**
     * True whenever the document has fetched any data.
     *
     * @type {boolean}
     */
    get hasData() {
        const { snapshot } = this;
        return !!snapshot && snapshot.exists();
    }
    /**
     * Firestore document reference.
     *
     * Use this property to get or set the
     * underlying document reference.
     *
     * Alternatively, you can also use `path` to change the
     * reference in more a readable way.
     *
     * @type {firestore.DocumentReference | Function}
     *
     * @example
     * const doc = new Document('albums/splinter');
     *
     * // Get the DocumentReference for `albums/splinter`
     * const ref = doc.ref;
     *
     * // Switch to another document
     * doc.ref = doc(getFirestore(), 'albums/americana');
     */
    get ref() {
        return this.refObservable.get();
    }
    set ref(ref) {
        this.source = ref;
    }
    /**
     * Id of the firestore document.
     *
     * To get the full-path of the document, use `path`.
     *
     * @type {string}
     */
    get id() {
        const ref = this.refObservable.get();
        return ref ? ref.id : undefined;
    }
    /**
     * Path of the document (e.g. 'albums/blackAlbum').
     *
     * Use this property to switch to another document in
     * the back-end. Effectively, it is a more compact
     * and readable way of setting a new ref.
     *
     * @type {string | Function}
     *
     * @example
     * const doc = new Document('artists/Metallica');
     * ...
     * // Switch to another document in the back-end
     * doc.path = 'artists/EaglesOfDeathMetal';
     *
     * // Or, you can use a reactive function to link
     * // to the contents of another document.
     * const doc2 = new Document('settings/activeArtist');
     * doc.path = () => 'artists/' + doc2.data.artistId;
     */
    get path() {
        var _a;
        // if we call toString() during initialization, eg to throw an error referring to this
        // document, this would throw an undefined error without the guard.
        let ref = (_a = this.refObservable) === null || _a === void 0 ? void 0 : _a.get();
        if (!ref) {
            return undefined;
        }
        let path = ref.id;
        while (ref.parent) {
            path = ref.parent.id + '/' + path;
            ref = ref.parent;
        }
        return path;
    }
    set path(documentPath) {
        this.source = documentPath;
    }
    /**
     * @private
     */
    get source() {
        return this.sourceInput;
    }
    set source(source) {
        if (this.collectionRefCount) {
            throw new Error('Cannot change source on Document that is controlled by a Collection');
        }
        if (this.sourceInput === source) {
            return;
        }
        this.sourceInput = source;
        this._updateSourceObserver();
        runInAction(() => {
            this.refObservable.set(resolveRef(source, this));
            this._updateRealtimeUpdates(true);
        });
    }
    /**
     * Real-time updating mode.
     *
     * Can be set to any of the following values:
     * - "auto" (enables real-time updating when the document becomes observed)
     * - "off" (no real-time updating, you need to call fetch explicitly)
     * - "on" (real-time updating is permanently enabled)
     *
     * @type {string}
     */
    get mode() {
        return this.modeObservable.get();
    }
    set mode(mode) {
        if (this.modeObservable.get() === mode) {
            return;
        }
        verifyMode(mode);
        runInAction(() => {
            this.modeObservable.set(mode);
            this._updateRealtimeUpdates();
        });
    }
    /**
     * Returns true when the Document is actively listening
     * for changes in the firestore back-end.
     *
     * @type {boolean}
     */
    get isActive() {
        return !!this.onSnapshotUnsubscribeFn;
    }
    /**
     * Underlying firestore snapshot.
     *
     * @type {firestore.DocumentSnapshot}
     */
    get snapshot() {
        return this.snapshotObservable.get();
    }
    /**
     * Updates one or more fields in the document.
     *
     * The update will fail if applied to a document that does
     * not exist.
     *
     * @param {Object} fields - Fields to update
     * @return {Promise}
     *
     * @example
     * await todoDoc.update({
     *   finished: true,
     *   text: 'O yeah, checked this one off',
     *   foo: {
     *     bar: 10
     *   }
     * });
     */
    update(fields) {
        const ref = this.refObservable.get();
        if (this.docSchema) {
            if (!this.snapshot) {
                console.warn(`${this.debugName} - Unable to verify schema in .update() because the document has not been fetched yet`);
            }
            else {
                try {
                    this._validateSchema(mergeUpdateData(toJS(this.data), fields));
                }
                catch (err) {
                    return Promise.reject(err);
                }
            }
        }
        return updateDoc(ref, fields);
    }
    /**
     * Writes to the document.
     *
     * If the document does not exist yet, it will be created.
     * If you pass options, the provided data can be merged into
     * the existing document.
     *
     * @param {Object} data - An object of the fields and values for the document
     * @param {Object} [options] - Set behaviour options
     * @param {Boolean} [options.merge] - Set to `true` to only replace the values specified in the data argument. Fields omitted will remain untouched.
     * @return {Promise}
     *
     * @example
     * const todo = new Document('todos/mynewtodo');
     * await todo.set({
     *   finished: false,
     *   text: 'this is awesome'
     * });
     */
    set(data, options) {
        if (this.docSchema) {
            try {
                if (options === null || options === void 0 ? void 0 : options.merge) {
                    this._validateSchema(mergeUpdateData(toJS(this.data), data));
                }
                else {
                    this._validateSchema(data);
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
        }
        return setDoc(this.refObservable.get(), data, options);
    }
    /**
     * Deletes the document in Firestore.
     *
     * Returns a promise that resolves once the document has been
     * successfully deleted from the backend (Note that it won't
     * resolve while you're offline).
     *
     * @return {Promise}
     */
    delete() {
        return deleteDoc(this.refObservable.get());
    }
    /**
     * Fetches new data from firestore. Use this to manually fetch
     * new data when `mode` is set to 'off'.
     *
     * @return {Promise}
     * @fullfil {Document<T>} This document
     *
     * @example
     * const doc = new Document('albums/splinter');
     * await doc.fetch();
     * console.log('data: ', doc.data);
     */
    fetch() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isVerbose) {
                console.debug(`${this.debugName} - fetching...`);
            }
            if (this.collectionRefCount) {
                throw new Error('Should not call fetch on Document that is controlled by a Collection');
            }
            if (this.isActive) {
                throw new Error('Should not call fetch when real-time updating is active');
            }
            if (this.isLoadingObservable.get()) {
                throw new Error('Fetch already in progress');
            }
            const ref = this.refObservable.get();
            if (!ref) {
                throw new Error('No ref or path set on Document');
            }
            runInAction(() => {
                this._ready(false);
                this.isLoadingObservable.set(true);
            });
            try {
                const snapshot = yield getDoc(ref);
                runInAction(() => {
                    this.isLoadingObservable.set(false);
                    this._updateFromSnapshot(snapshot);
                    if (this.isVerbose) {
                        console.debug(`${this.debugName} - fetched: ${JSON.stringify(toJS(this.data))}`);
                    }
                });
                this._ready(true);
            }
            catch (err) {
                console.log(`${this.debugName} - fetch failed: ${err.message}`);
                runInAction(() => {
                    this.isLoadingObservable.set(false);
                    this._updateFromSnapshot(undefined);
                    this._ready(true);
                });
                throw err;
            }
            return this;
        });
    }
    /**
     * True when new data is being loaded.
     *
     * Loads are performed in these cases:
     *
     * - When real-time updating is started
     * - When a different `ref` or `path` is set
     * - When a `query` is set or cleared
     * - When `fetch` is explicitly called
     *
     * @type {boolean}
     *
     * @example
     * const doc = new Document('albums/splinter', {mode: 'off'});
     * console.log(doc.isLoading); 	// false
     * doc.fetch(); 								// start fetch
     * console.log(doc.isLoading); 	// true
     * await doc.ready(); 					// wait for fetch to complete
     * console.log(doc.isLoading); 	// false
     *
     * @example
     * const doc = new Document('albums/splinter');
     * console.log(doc.isLoading); 	// false
     * const dispose = autorun(() => {
     *   console.log(doc.data);			// start observing document data
     * });
     * console.log(doc.isLoading); 	// true
     * ...
     * dispose();										// stop observing document data
     * console.log(doc.isLoading); 	// false
     */
    get isLoading() {
        this.dataObservable.get(); // access data
        return this.isLoadingObservable.get();
    }
    /**
     * True when a snapshot has been obtained from the Firestore
     * back-end. This property indicates whether an initial fetch/get call
     * to Firestore has completed processing. This doesn't however mean that data
     * is available, as the returned snapshot may contain a value indicating
     * that the document doesn't exist. Use `hasData` to check whether any
     * data was succesfully retrieved.
     *
     * @type {boolean}
     */
    get isLoaded() {
        const { snapshot } = this;
        return !!snapshot;
    }
    /**
     * Promise that is resolved when the Document has
     * data ready to be consumed.
     *
     * Use this function to for instance wait for
     * the initial snapshot update to complete, or to wait
     * for fresh data after changing the path/ref.
     *
     * @return {Promise}
     *
     * @example
     * const doc = new Document('albums/splinter', {mode: 'on'});
     * await doc.ready();
     * console.log('data: ', doc.data);
     *
     * @example
     * const doc = new Document('albums/splinter', {mode: 'on'});
     * await doc.ready();
     * ...
     * // Changing the path causes a new snapshot update
     * doc.path = 'albums/americana';
     * await doc.ready();
     * console.log('data: ', doc.data);
     */
    ready() {
        this.readyPromise = this.readyPromise || Promise.resolve();
        return this.readyPromise;
    }
    toString() {
        return this.debugName;
    }
    /**
     * @private
     */
    get debugName() {
        return `${this.debugInstanceName || this.constructor.name} (${this.path})`;
    }
    /**
     * @private
     */
    get context() {
        return this.ctx;
    }
    /**
     * Called whenever a property of this class becomes observed.
     * @private
     */
    addObserverRef() {
        if (this.isVerbose) {
            console.debug(`${this.debugName} - addRef (${this.observedRefCount + 1})`);
        }
        const res = ++this.observedRefCount;
        if (res === 1) {
            runInAction(() => this._updateRealtimeUpdates());
        }
        return res;
    }
    /**
     * Called whenever a property of this class becomes un-observed.
     * @private
     */
    releaseObserverRef() {
        if (this.isVerbose) {
            console.debug(`${this.debugName} - releaseRef (${this.observedRefCount - 1})`);
        }
        const res = --this.observedRefCount;
        if (!res) {
            runInAction(() => this._updateRealtimeUpdates());
        }
        return res;
    }
    /**
     * ICollectionDocument
     * @private
     */
    addCollectionRef() {
        return ++this.collectionRefCount;
    }
    releaseCollectionRef() {
        return --this.collectionRefCount;
    }
    updateFromCollectionSnapshot(snapshot) {
        return this._updateFromSnapshot(snapshot);
    }
    /**
     * @private
     */
    _updateFromSnapshot(snapshot) {
        let data = snapshot ? snapshot.data(this.snapshotOptions) : undefined;
        if (data) {
            data = this._validateSchema(data);
        }
        else {
            data = {};
        }
        this.snapshotObservable.set(snapshot);
        if (!isEqual$1(data, this.dataObservable.get())) {
            this.dataObservable.set(data);
        }
    }
    /**
     * @private
     */
    _ready(complete) {
        if (complete) {
            const readyResolve = this.readyResolveFn;
            if (readyResolve) {
                this.readyResolveFn = undefined;
                readyResolve();
            }
        }
        else if (!this.readyResolveFn) {
            this.readyPromise = new Promise((resolve) => {
                this.readyResolveFn = resolve;
            });
        }
    }
    /**
     * @private
     */
    _onSnapshot(snapshot) {
        runInAction(() => {
            if (this.isVerbose) {
                console.debug(`${this.debugName} - onSnapshot`);
            }
            this.isLoadingObservable.set(false);
            try {
                this._updateFromSnapshot(snapshot);
            }
            catch (err) {
                console.error(err.message);
            }
            this._ready(true);
        });
    }
    /**
     * @private
     */
    _onSnapshotError(error) {
        console.warn(`${this.debugName} - onSnapshotError: ${error.message}`);
    }
    /**
     * @private
     */
    _updateRealtimeUpdates(force) {
        let newActive = false;
        switch (this.modeObservable.get()) {
            case Mode.Auto:
                newActive = !!this.observedRefCount;
                break;
            case Mode.Off:
                newActive = false;
                break;
            case Mode.On:
                newActive = true;
                break;
        }
        // Start/stop listening for snapshot updates
        if (this.collectionRefCount || !this.refObservable.get()) {
            newActive = false;
        }
        const active = !!this.onSnapshotUnsubscribeFn;
        if (newActive && (!active || force)) {
            if (this.isVerbose) {
                console.debug(`${this.debugName} - ${active ? 're-' : ''}start (${this.modeObservable.get()}:${this.observedRefCount})`);
            }
            this._ready(false);
            this.isLoadingObservable.set(true);
            if (this.onSnapshotUnsubscribeFn) {
                this.onSnapshotUnsubscribeFn();
            }
            this.onSnapshotUnsubscribeFn = onSnapshot(this.refObservable.get(), {
                next: (snapshot) => this._onSnapshot(snapshot),
                error: (err) => this._onSnapshotError(err),
            });
        }
        else if (!newActive && active) {
            if (this.isVerbose) {
                console.debug(`${this.debugName} - stop (${this.modeObservable.get()}:${this.observedRefCount})`);
            }
            this.onSnapshotUnsubscribeFn();
            this.onSnapshotUnsubscribeFn = undefined;
            if (this.isLoadingObservable.get()) {
                this.isLoadingObservable.set(false);
            }
            this._ready(true);
        }
    }
    /**
     * @private
     */
    _updateSourceObserver() {
        if (this.sourceDisposerFn) {
            this.sourceDisposerFn();
            this.sourceDisposerFn = undefined;
        }
        if (typeof this.sourceInput === 'function') {
            this.sourceDisposerFn = reaction(() => this.sourceInput(), (value) => {
                runInAction(() => {
                    // TODO, check whether path has changed
                    this.refObservable.set(resolveRef(value, this));
                    this._updateRealtimeUpdates(true);
                });
            });
        }
    }
    /**
     * @private
     */
    _validateSchema(data) {
        if (!this.docSchema) {
            return data;
        }
        try {
            data = this.docSchema(data);
        }
        catch (err) {
            // console.log(JSON.stringify(err));
            throw new Error('Invalid value at "' +
                err.path +
                '" for ' +
                (this.debugInstanceName || this.constructor.name) +
                ' with id "' +
                this.id +
                '": ' +
                err.message);
        }
        return data;
    }
}

// * @param {Number} [options.limit] Maximum number of documents to fetch (see `Collection.limit`)
/**
 * The Collection class lays at the heart of `firestorter`.
 * It represents a collection in Firestore and its queried data. It is
 * observable so that it can be efficiently linked to a React Component
 * using `mobx-react`'s `observer` pattern.
 *
 * Collection supports three modes of real-time updating:
 * - "auto" (real-time updating is enabled on demand) (default)
 * - "on" (real-time updating is permanently turned on)
 * - "off" (real-time updating is turned off, use `.fetch` explicitly)
 *
 * The "auto" mode ensures that Collection only communicates with
 * the firestore back-end whever the Collection is actually
 * rendered by a Component. This prevents unneccesary background
 * updates and leads to the best possible performance.
 *
 * When real-time updates are enabled, data is automatically fetched
 * from Firestore whenever it changes in the back-end (using `onSnapshot`).
 * This enables almost magical instant updates. When data is changed,
 * only those documents are updated that have actually changed. Document
 * objects are re-used where possible, and just their data is updated.
 * The same is true for the `docs` property. If no documents where
 * added, removed, re-ordered, then the `docs` property itself will not
 * change.
 *
 * Alternatively, you can keep real-time updates turned off and fetch
 * manually. This will update the Collection as efficiently as possible.
 * If nothing has changed on the back-end, no new Documents would be
 * created or modified.
 *
 * @param {CollectionSource} [source] String-path, ref or function that returns a path or ref
 * @param {Object} [options] Configuration options
 * @param {Function|Query} [options.query] See `Collection.query`
 * @param {String} [options.mode] See `Collection.mode`
 * @param {Function} [options.createDocument] Factory function for creating documents `(source, options) => new Document(source, options)`
 * @param {boolean} [options.minimizeUpdates] Enables additional algorithms to reduces updates to your app (e.g. when snapshots are received in rapid succession)
 * @param {boolean} [options.debug] Enables debug logging
 * @param {String} [options.debugName] Name to use when debug logging is enabled
 *
 * @example
 * import {Collection} from 'firestorter';
 *
 * // Create a collection using path (preferred)
 * const col = new Collection('artists/Metallica/albums');
 *
 * // Create a collection using a reference
 * const col2 = new Collection(collection(getFirestore(), 'todos'));
 *
 * // Create a collection and permanently start real-time updating
 * const col2 = new Collection('artists', {
 *   mode: 'on'
 * });
 *
 * // Create a collection with a query on it
 * const col3 = new Collection('artists', {
 *   query: (ref) => query(ref, orderBy('name', 'asc'))
 * });
 *
 * @example
 * // In manual mode, just call `fetch` explicitly
 * const col = new Collection('albums', {mode: 'off'});
 * col.fetch().then((collection) => {
 *   collection.docs.forEach((doc) => console.log(doc));
 * });
 *
 * // Yo can use the `isLoading` property to see whether a fetch
 * // is in progress
 * console.log(col.isLoading);
 */
class Collection {
    // private _limit: any;
    // private _cursor: any;
    constructor(source, options = {}) {
        const { query, createDocument, mode, 
        // limit,
        debug, debugName, minimizeUpdates = false, initialLocalSnapshotDetectTime = 50, initialLocalSnapshotDebounceTime = 1000, context, } = options;
        this.isVerbose = debug || false;
        this.debugInstanceName = debugName;
        this.isMinimizingUpdates = minimizeUpdates;
        this.initialLocalSnapshotDetectTime = initialLocalSnapshotDetectTime;
        this.initialLocalSnapshotDebounceTime = initialLocalSnapshotDebounceTime;
        this.docLookup = {};
        this.observedRefCount = 0;
        this.sourceInput = source;
        this.refObservable = observable.box(undefined);
        this.queryInput = query;
        this.queryRefObservable = observable.box(undefined);
        // this._limit = observable.box(limit || undefined);
        // this._cursor = observable.box(undefined);
        this.modeObservable = observable.box(verifyMode(mode || Mode.Auto));
        this.isLoadingObservable = observable.box(false);
        this.isLoadedObservable = observable.box(false);
        this.hasDocsObservable = enhancedObservable(false, this);
        this.docsObservable = enhancedObservable([], this);
        this.ctx = context;
        if (createDocument) {
            this.createDocument = createDocument;
        }
        else {
            this.createDocument = (docSource, docOptions) => new Document(docSource, docOptions);
        }
        runInAction(() => this._updateRealtimeUpdates(true, true));
    }
    /**
     * Array of all the documents that have been fetched
     * from firestore.
     *
     * @type {Array}
     *
     * @example
     * collection.docs.forEach((doc) => {
     *   console.log(doc.data);
     * });
     */
    get docs() {
        return this.docsObservable;
    }
    /**
     * True whenever the docs array is not empty.
     *
     * @type {boolean}
     */
    get hasDocs() {
        return this.hasDocsObservable.get();
    }
    /**
     * Firestore collection reference.
     *
     * Use this property to get or set the collection
     * reference. When set, a fetch to the new collection
     * is performed.
     *
     * Alternatively, you can also use `path` to change the
     * reference in more a readable way.
     *
     * @type {firestore.CollectionReference | Function}
     *
     * @example
     * const col = new Collection(collection(getFirestore(), 'albums/splinter/tracks'));
     * ...
     * // Switch to another collection
     * col.ref = collection(getFirestore(), 'albums/americana/tracks');
     */
    get ref() {
        let ref = this.refObservable.get();
        if (!this.refDisposerFn) {
            ref = this._resolveRef(this.sourceInput);
        }
        return ref;
    }
    set ref(ref) {
        this.source = ref;
    }
    /**
     * Id of the Firestore collection (e.g. 'tracks').
     *
     * To get the full-path of the collection, use `path`.
     *
     * @type {string}
     */
    get id() {
        const ref = this.ref;
        return ref ? ref.id : undefined;
    }
    /**
     * Path of the collection (e.g. 'albums/blackAlbum/tracks').
     *
     * Use this property to switch to another collection in
     * the back-end. Effectively, it is a more compact
     * and readable way of setting a new ref.
     *
     * @type {string | Function}
     *
     * @example
     * const col = new Collection('artists/Metallica/albums');
     * ...
     * // Switch to another collection in the back-end
     * col.path = 'artists/EaglesOfDeathMetal/albums';
     */
    get path() {
        let ref = this.ref;
        if (!ref) {
            return undefined;
        }
        let path = ref.id;
        while (ref.parent) {
            path = ref.parent.id + '/' + path;
            ref = ref.parent;
        }
        return path;
    }
    set path(collectionPath) {
        this.source = collectionPath;
    }
    /**
     * @private
     */
    get source() {
        return this.sourceInput;
    }
    set source(source) {
        if (this.sourceInput === source) {
            return;
        }
        runInAction(() => {
            this.sourceInput = source;
            // Stop any reactions
            if (this.refDisposerFn) {
                this.refDisposerFn();
                this.refDisposerFn = undefined;
            }
            // Update real-time updating
            this._updateRealtimeUpdates(true);
        });
    }
    /**
     * Use this property to set any order-by, where,
     * limit or start/end criteria. When set, that query
     * is used to retrieve any data. When cleared (`undefined`),
     * the collection reference is used.
     *
     * The query can be a Function of the form
     * `(firestore.CollectionReference) => firestore.Query | null | undefined`.
     * Where returning `null` will result in an empty collection,
     * and returning `undefined` will revert to using the collection
     * reference (the entire collection).
     *
     * If the query function makes use of any observable values then
     * it will be re-run when those values change.
     *
     * query can be set to a direct Firestore `Query` object but this
     * is an uncommon usage.
     *
     * @type {firestore.Query | Function}
     *
     * @example
     * const todos = new Collection('todos');
     *
     * // Sort the collection
     * todos.query = (ref) => query(ref, orderBy('text', 'asc'));
     *
     * // Order, filter & limit
     * todos.query = (ref) => query(ref, where('finished', '==', false), orderBy('finished', 'asc').limit(20));
     *
     * // React to changes in observable and force empty collection when required
     * todos.query = (ref) => authStore.uid ? query(ref, where('owner', '==', authStore.uid)) : null;
     *
     * // Clear the query, will cause whole collection to be fetched
     * todos.query = undefined;
     */
    get query() {
        return this.queryInput;
    }
    set query(query) {
        if (this.queryInput === query) {
            return;
        }
        runInAction(() => {
            this.queryInput = query;
            // Stop any reactions
            if (this.refDisposerFn) {
                this.refDisposerFn();
                this.refDisposerFn = undefined;
            }
            // Update real-time updating
            this._updateRealtimeUpdates(undefined, true);
        });
    }
    /**
     * @private
     * firestore.Query -> a valid query exists, use that
     * null -> the query function returned `null` to disable the collection
     * undefined -> no query defined, use collection ref instead
     */
    get queryRef() {
        return this.queryRefObservable.get();
    }
    /**
     * Real-time updating mode.
     *
     * Can be set to any of the following values:
     * - "auto" (enables real-time updating when the collection is observed)
     * - "off" (no real-time updating, you need to call fetch explicitly)
     * - "on" (real-time updating is permanently enabled)
     *
     * @type {string}
     */
    get mode() {
        return this.modeObservable.get();
    }
    set mode(mode) {
        if (this.modeObservable.get() === mode) {
            return;
        }
        verifyMode(mode);
        runInAction(() => {
            this.modeObservable.set(mode);
            this._updateRealtimeUpdates();
        });
    }
    /**
     * Returns true when the Collection is actively listening
     * for changes in the firestore back-end.
     *
     * @type {boolean}
     */
    get isActive() {
        return !!this.onSnapshotUnsubscribe;
    }
    /**
     * Fetches new data from firestore. Use this to manually fetch
     * new data when `mode` is set to 'off'.
     *
     * @return {Promise}
     * @fulfil {Collection} - This collection
     * @reject {Error} - Error describing the cause of the problem
     *
     * @example
     * const col = new Collection('albums', 'off');
     * col.fetch().then(({docs}) => {
     *   docs.forEach(doc => console.log(doc));
     * });
     */
    fetch() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isVerbose) {
                console.debug(`${this.debugName} - fetching...`);
            }
            if (this.isActive) {
                throw new Error('Should not call fetch when real-time updating is active');
            }
            if (this.isLoadingObservable.get()) {
                throw new Error('Fetch already in progress');
            }
            const colRef = this._resolveRef(this.sourceInput);
            const queryRef = this._resolveQuery(colRef, this.queryInput);
            const ref = queryRef !== undefined ? queryRef : colRef;
            if (!ref) {
                throw new Error('No ref, path or query set on Collection');
            }
            runInAction(() => {
                this._ready(false);
                this.isLoadingObservable.set(true);
            });
            try {
                const snapshot = yield getDocs(ref);
                runInAction(() => {
                    this.isLoadingObservable.set(false);
                    this._updateFromSnapshot(snapshot);
                    if (this.isVerbose) {
                        console.debug(`${this.debugName} - fetched ${snapshot.docs.length} documents`);
                    }
                });
                this._ready(true);
                return this;
            }
            catch (err) {
                console.log(`${this.debugName} - fetch failed: ${err.message}`);
                runInAction(() => {
                    this.isLoadingObservable.set(false);
                    this._updateFromSnapshot(undefined);
                    this._ready(true);
                });
                throw err;
            }
        });
    }
    /**
     * True when new data is being loaded.
     *
     * Fetches are performed in these cases:
     *
     * - When real-time updating is started
     * - When a different `ref` or `path` is set
     * - When a `query` is set or cleared
     * - When `fetch` is explicitly called
     *
     * @type {boolean}
     *
     * @example
     * const col = new Collection('albums', {mode: 'off'});
     * console.log(col.isLoading);  // false
     * col.fetch();                 // start fetch
     * console.log(col.isLoading);  // true
     * await col.ready();           // wait for fetch to complete
     * console.log(col.isLoading);  // false
     *
     * @example
     * const col = new Collection('albums');
     * console.log(col.isLoading);  // false
     * const dispose = autorun(() => {
     *   console.log(col.docs);     // start observing collection data
     * });
     * console.log(col.isLoading);  // true
     * ...
     * dispose();                   // stop observing collection data
     * console.log(col.isLoading);  // false
     */
    get isLoading() {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, @babel/no-unused-expressions
        this.docsObservable.length;
        return this.isLoadingObservable.get();
    }
    /**
     * True when a query snapshot has been retrieved at least once.
     * This however does not mean that any documents have been retrieved,
     * as the number of returned document may have been 0.
     * Use `hasDocs` to check whether any documents have been retrieved.
     *
     * @type {boolean}
     */
    get isLoaded() {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, @babel/no-unused-expressions
        this.docsObservable.length;
        return this.isLoadedObservable.get();
    }
    /**
     * Promise that is resolved when the Collection has
     * finished fetching its (initial) documents.
     *
     * Use this method to for instance wait for
     * the initial snapshot update to complete, or to wait
     * for fresh data after changing the path/ref.
     *
     * @return {Promise}
     *
     * @example
     * const col = new Collection('albums', {mode: 'on'});
     * await col.ready();
     * console.log('albums: ', col.docs);
     *
     * @example
     * const col = new Collection('artists/FooFighters/albums', {mode: 'on'});
     * await col.ready();
     * ...
     * // Changing the path causes a new snapshot update
     * col.path = 'artists/TheOffspring/albums';
     * await col.ready();
     * console.log('albums: ', col.docs);
     */
    ready() {
        this.readyPromise = this.readyPromise || Promise.resolve(null);
        return this.readyPromise;
    }
    /**
     * Add a new document to this collection with the specified
     * data, assigning it a document ID automatically.
     *
     * @param {Object} data - JSON data for the new document
     * @return {Promise}
     * @fulfil {Document} - The newly created document
     * @reject {Error} - Error, e.g. a schema validation error or Firestore error
     *
     * @example
     * const doc = await collection.add({
     *   finished: false,
     *   text: 'New todo',
     *   options: {
     *     highPrio: true
     *   }
     * });
     * console.log(doc.id); // print id of new document
     *
     * @example
     * // If you want to create a document with a custom Id, then
     * // use the Document class instead, like this
     * const docWithCustomId = new Document('todos/mytodoid');
     * await docWithCustomId.set({
     *   finished: false,
     *   text: 'New todo',
     * });
     */
    add(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const ref = this.ref;
            if (!ref) {
                throw new Error('No valid collection reference');
            }
            // REVISIT: can we know to skip this if schemas not in use?
            // Validate schema using a dummy snapshot
            this.createDocument(undefined, {
                context: this.context,
                snapshot: {
                    data: () => data,
                    exists: () => true,
                    get: (fieldPath) => data[fieldPath],
                    id: '',
                    metadata: undefined,
                    ref: undefined,
                },
            });
            // Add to firestore
            const ref2 = yield addDoc(ref, data);
            const snapshot = yield getDoc(ref2);
            return this.createDocument(snapshot.ref, {
                context: this.context,
                snapshot,
            });
        });
    }
    /**
     * Deletes all the documents in the collection or query.
     * @ignore
     * TODO - Not implemented yet
     */
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const ref = this.ref;
            if (!ref) {
                throw new Error('No valid collection reference');
            }
            // TODO
        });
    }
    toString() {
        return this.debugName;
    }
    /**
     * @private
     */
    get debugName() {
        return `${this.debugInstanceName || this.constructor.name} (${this.path})`;
    }
    /**
     * @private
     */
    get context() {
        return this.ctx;
    }
    /**
     * Limit used for query pagination.
     */
    /* get limit(): ?number {
          return this._limit.get();
      }
      set limit(val: ?number) {
          this._limit.set(val || undefined);
      } */
    /**
     * Paginates to the start of the collection,
     * resetting any pagination cursor that exists.
     */
    /* paginateToStart() {
          this._cursor.set(undefined);
      } */
    /**
     * Paginates to the next page. This sets the cursor
     * to `startAfter` the last document.
     *
     * @return {Boolean} False in case pagination was not possible
     */
    /* paginateNext(): boolean {
          if (!this.canPaginateNext) return false;
          this._cursor.set({
              type: 'startAfter',
              value: this.docs[this.docs.length - 1].ref
          });
          return true;
      } */
    /**
     * Paginates to the previous page. This sets the cursor
     * to `endBefore` the first document in `docs`.
     *
     * @return {Boolean} False in case pagination was not possible
     */
    /* paginatePrevious(): boolean {
          if (!this.canPaginatePrevious) return false;
          if (!this.docs.length) {
              this._cursor.set(undefined);
              return true;
          }
          this._cursor.set({
              type: 'endBefore',
              value: this.docs[0].ref
          });
          return true;
      }
  
      get canPaginateNext(): boolean {
          if (!this.limit) return false;
          return this.docs.length >= this.limit;
      }
  
      get canPaginatePrevious(): boolean {
          if (!this.limit) return false;
          return this._cursor.get() ? true : false;
      } */
    /**
     * Called whenever a property of this class becomes observed.
     * @private
     */
    addObserverRef() {
        if (this.isVerbose) {
            console.debug(`${this.debugName} - addRef (${this.observedRefCount + 1})`);
        }
        const res = ++this.observedRefCount;
        if (res === 1) {
            runInAction(() => this._updateRealtimeUpdates());
        }
        return res;
    }
    /**
     * Called whenever a property of this class becomes un-observed.
     * @private
     */
    releaseObserverRef() {
        if (this.isVerbose) {
            console.debug(`${this.debugName} - releaseRef (${this.observedRefCount - 1})`);
        }
        const res = --this.observedRefCount;
        if (!res) {
            runInAction(() => this._updateRealtimeUpdates());
        }
        return res;
    }
    _ready(complete) {
        if (complete) {
            const readyResolve = this.readyResolveFn;
            if (readyResolve) {
                this.readyResolveFn = undefined;
                readyResolve();
            }
        }
        else if (!this.readyResolveFn) {
            this.readyPromise = new Promise((resolve) => {
                this.readyResolveFn = resolve;
            });
        }
    }
    _resolveRef(source) {
        if (this.sourceCache === source) {
            return this.sourceCacheRef;
        }
        let ref;
        if (typeof source === 'string') {
            ref = collection(getFirestore(this), source);
        }
        else if (typeof source === 'function') {
            ref = this._resolveRef(source());
            return ref; // don't set cache in this case
        }
        else {
            ref = source;
        }
        this.sourceCache = source;
        this.sourceCacheRef = ref;
        return ref;
    }
    _resolveQuery(collectionRef, query) {
        let ref = query;
        if (typeof query === 'function') {
            ref = query(collectionRef);
        }
        // Apply pagination cursor
        /* const cursor = this._cursor.get();
            if (cursor) {
                ref = ref || collectionRef;
                switch (cursor.type) {
                    case 'startAfter': ref = ref.startAfter(cursor.value); break;
                    case 'startAt': ref = ref.startAt(cursor.value); break;
                    case 'endBefore': ref = ref.endBefore(cursor.value); break;
                    case 'endAt': ref = ref.endAt(cursor.value); break;
                }
            }
    
            // Apply fetch limit
            const limit = this.limit;
            if (limit) {
                ref = ref || collectionRef;
                ref = ref.limit(limit);
            } */
        return ref;
    }
    /**
     * @private
     */
    _onSnapshot(snapshot) {
        // Firestore sometimes returns multiple snapshots initially.
        // The first one containing cached results, followed by a second
        // snapshot which was fetched from the cloud.
        if (this.initialLocalSnapshotDebounceTimer) {
            clearTimeout(this.initialLocalSnapshotDebounceTimer);
            this.initialLocalSnapshotDebounceTimer = undefined;
            if (this.isVerbose) {
                console.debug(`${this.debugName} - cancelling initial debounced snapshot, because a newer snapshot has been received`);
            }
        }
        if (this.isMinimizingUpdates) {
            const timeElapsed = Date.now() - this.initialLocalSnapshotStartTime;
            this.initialLocalSnapshotStartTime = 0;
            if (timeElapsed >= 0 && timeElapsed < this.initialLocalSnapshotDetectTime) {
                if (this.isVerbose) {
                    console.debug(`${this.debugName} - local snapshot detected (${timeElapsed}ms < ${this.initialLocalSnapshotDetectTime}ms threshold), debouncing ${this.initialLocalSnapshotDebounceTime} msec...`);
                }
                this.initialLocalSnapshotDebounceTimer = setTimeout(() => {
                    this.initialLocalSnapshotDebounceTimer = undefined;
                    this._onSnapshot(snapshot);
                }, this.initialLocalSnapshotDebounceTime);
                return;
            }
        }
        // Process snapshot
        runInAction(() => {
            if (this.isVerbose) {
                console.debug(`${this.debugName} - onSnapshot`);
            }
            this.isLoadingObservable.set(false);
            this._updateFromSnapshot(snapshot);
            this._ready(true);
        });
    }
    /**
     * @private
     */
    _onSnapshotError(error) {
        console.warn(`${this.debugName} - onSnapshotError: ${error.message}`);
    }
    /**
     * @private
     */
    _updateFromSnapshot(snapshot) {
        const newDocs = [];
        if (snapshot) {
            snapshot.docs.forEach((docSnapshot) => {
                let doc = this.docLookup[docSnapshot.id];
                try {
                    if (doc) {
                        doc.updateFromCollectionSnapshot(docSnapshot);
                    }
                    else {
                        doc = this.createDocument(docSnapshot.ref, {
                            context: this.context,
                            snapshot: docSnapshot,
                        });
                        this.docLookup[doc.id] = doc;
                    }
                    doc.addCollectionRef();
                    newDocs.push(doc);
                }
                catch (err) {
                    console.error(err.message);
                }
            });
        }
        this.docsObservable.forEach((doc) => {
            if (!doc.releaseCollectionRef()) {
                delete this.docLookup[doc.id || ''];
            }
        });
        this.hasDocsObservable.set(!!newDocs.length);
        this.isLoadedObservable.set(true);
        if (this.docsObservable.length !== newDocs.length) {
            this.docsObservable.replace(newDocs);
        }
        else {
            for (let i = 0, n = newDocs.length; i < n; i++) {
                if (newDocs[i] !== this.docsObservable[i]) {
                    this.docsObservable.replace(newDocs);
                    break;
                }
            }
        }
    }
    /**
     * @private
     */
    _updateRealtimeUpdates(updateSourceRef, updateQueryRef) {
        let newActive = false;
        const active = !!this.onSnapshotUnsubscribe;
        switch (this.modeObservable.get()) {
            case Mode.Auto:
                newActive = !!this.observedRefCount;
                break;
            case Mode.Off:
                newActive = false;
                break;
            case Mode.On:
                newActive = true;
                break;
        }
        // Update source & query ref if needed
        if (newActive && !active) {
            updateSourceRef = true;
            updateQueryRef = true;
        }
        if (updateSourceRef) {
            this.refObservable.set(this._resolveRef(this.sourceInput));
        }
        if (updateQueryRef) {
            this.queryRefObservable.set(this._resolveQuery(this.refObservable.get(), this.queryInput));
        }
        // Upon de-activation, stop any observed reactions or
        // snapshot listeners.
        if (!newActive) {
            if (this.refDisposerFn) {
                this.refDisposerFn();
                this.refDisposerFn = undefined;
            }
            this.onSnapshotRefCache = undefined;
            if (this.onSnapshotUnsubscribe) {
                if (this.isVerbose) {
                    console.debug(`${this.debugName} - stop (${this.modeObservable.get()}:${this.observedRefCount})`);
                }
                this.onSnapshotUnsubscribe();
                this.onSnapshotUnsubscribe = undefined;
                if (this.isLoadingObservable.get()) {
                    this.isLoadingObservable.set(false);
                }
                this._ready(true);
            }
            return;
        }
        // Start listening for ref-changes
        if (!this.refDisposerFn) {
            let initialSourceRef = this.refObservable.get();
            let initialQueryRef = this.queryRefObservable.get();
            this.refDisposerFn = reaction(() => {
                let sourceRef = this._resolveRef(this.sourceInput);
                let queryRef2 = this._resolveQuery(sourceRef, this.queryInput);
                if (initialSourceRef) {
                    sourceRef = initialSourceRef;
                    queryRef2 = initialQueryRef;
                    initialSourceRef = undefined;
                    initialQueryRef = undefined;
                }
                return {
                    queryRef2,
                    sourceRef,
                };
            }, ({ sourceRef, queryRef2 }) => {
                runInAction(() => {
                    if (this.refObservable.get() !== sourceRef ||
                        this.queryRefObservable.get() !== queryRef2) {
                        this.refObservable.set(sourceRef);
                        this.queryRefObservable.set(queryRef2);
                        this._updateRealtimeUpdates();
                    }
                });
            });
        }
        // Resolve ref and check whether it has changed
        const queryRef = this.queryRefObservable.get();
        const ref = queryRef !== undefined ? queryRef : this.refObservable.get();
        if (this.onSnapshotRefCache === ref) {
            return;
        }
        this.onSnapshotRefCache = ref;
        // Stop any existing listener
        if (this.onSnapshotUnsubscribe) {
            this.onSnapshotUnsubscribe();
            this.onSnapshotUnsubscribe = undefined;
        }
        // If no valid ref exists, then clear the collection so no "old"
        // documents are visible.
        if (!ref) {
            if (this.docsObservable.length) {
                this._updateFromSnapshot({
                    docChanges: (options) => {
                        return [];
                    },
                    docs: [],
                    empty: true,
                    forEach: () => true,
                    metadata: undefined,
                    query: queryRef,
                    size: 0,
                });
            }
            return;
        }
        // Start listener
        if (this.isVerbose) {
            console.debug(`${this.debugName} - ${active ? 're-' : ''}start (${this.modeObservable.get()}:${this.observedRefCount})`);
        }
        this._ready(false);
        this.isLoadingObservable.set(true);
        this.initialLocalSnapshotStartTime = Date.now();
        this.onSnapshotUnsubscribe = onSnapshot(ref, {
            next: (snapshot) => this._onSnapshot(snapshot),
            error: (err) => this._onSnapshotError(err),
        });
    }
}

const isEqual$2 = require('lodash.isequal');
/**
 * Collection that aggregates documents from multiple queries into
 * a single, easy accessible collection.
 *
 * AggregateCollection is driven by the `queries` function, which defines what
 * queries should be executed on the Firestore cloud back-end. GeoQuery is
 * for instance a more specific use-case of a aggregated-collection using a range
 * of geo-hash queries.
 *
 * @param {CollectionSource} [source] String-path, ref or function that returns a path or ref
 * @param {Object} [options] Configuration options
 * @param {AggregateCollectionQueriesFn} [options.queries] See `AggregateCollection.queries`
 * @param {Function} [options.createDocument] Factory function for creating documents `(source, options) => new Document(source, options)`
 * @param {Function} [options.orderBy] Client side sort function
 * @param {Function} [options.filterBy] Client side filter function
 * @param {boolean} [options.debug] Enables debug logging
 * @param {String} [options.debugName] Name to use when debug logging is enabled
 *
 * @example
 * import {AggregateCollection} from 'firestorter';
 *
 * // Query all unfinished todos for a set of users
 * const userIds = ['pinky', 'brain'];
 * const col = new AggregateCollection('todos', {
 *   queries: () => userIds.map(userId => ({
 *     key: userId, // unique-key by which the query is re-used/cached
 *     query: (ref) => ref.where('userId', '==', userId).where('finished', '==', false)
 *   }))
 * });
 */
class AggregateCollection {
    constructor(source, options) {
        this.observedRefCount = 0;
        /**
         * @private
         */
        this._onCreateDocument = (source, options) => {
            if (!source) {
                return this.createDocument(source, options);
            }
            // @ts-ignore
            const doc = source.id ? this.documentRecycleMap[source.id] : null;
            return doc || this.createDocument(source, options);
        };
        makeObservable(this, {
            docs: computed,
        });
        this.collectionSource = source;
        if (options.createDocument) {
            this.createDocument = options.createDocument;
        }
        else {
            this.createDocument = (docSource, docOptions) => new Document(docSource, docOptions);
        }
        this.queriesFn = options.queries;
        this.orderBy = options.orderBy;
        this.filterBy = options.filterBy;
        this.debug = options.debug || false;
        this.debugInstanceName = options.debugName;
        this.collections = enhancedObservable([], this);
        this.prevCollections = [];
        this.collectionRecycleMap = {};
        this.documentRecycleMap = {};
        this.ctx = options.context;
    }
    /**
     * Array of all the documents that have been fetched
     * from firestore.
     *
     * @type {Array}
     *
     * @example
     * aggregateCollection.docs.forEach((doc) => {
     *   console.log(doc.data);
     * });
     */
    get docs() {
        let docs = [];
        // Aggregrate all docs from the queries
        let hasAllData = true;
        this.collections.forEach((col) => {
            if (col.isLoading) {
                hasAllData = false;
            }
            col.docs.forEach((doc) => docs.push(doc));
        });
        // If new queries have been added but have not yet
        // completed loading, use the previous queries instead
        // (until) all data has loaded
        if (!hasAllData && this.prevCollections.length) {
            // console.log('usingPrevQueries');
            docs = [];
            this.prevCollections.forEach((col) => {
                col.docs.forEach((doc) => docs.push(doc));
            });
        }
        else if (hasAllData) {
            // console.log('+++ ALL DATA AVAIL');
            this.prevCollections = this.collections.slice(0);
        }
        // console.log('unfilteredDocs: ', docs.length);
        if (this.filterBy) {
            docs = docs.filter(this.filterBy);
        }
        if (this.orderBy) {
            docs.sort(this.orderBy);
        }
        // console.log('docs: ', docs.length);
        return docs;
    }
    /**
     * True whenever any documents have been fetched.
     *
     * @type {boolean}
     */
    get hasDocs() {
        return this.docs.length > 0;
    }
    /**
     * Array of all the collections inside this aggregate
     * collection.
     *
     * @type {Array}
     *
     * @example
     * aggregateCollection.cols.forEach((col) => {
     *   console.log(col.docs.length);
     * });
     */
    get cols() {
        return this.collections;
    }
    /**
     * Queries function.
     *
     * @type {Function}
     */
    get queries() {
        return this.queriesFn;
    }
    /**
     * True when new data is being loaded.
     *
     * @type {boolean}
     */
    get isLoading() {
        return this.collections.reduce((acc, col) => acc || col.isLoading, false);
    }
    /**
     * True when data for all underlying collections has been loaded.
     *
     * @type {boolean}
     */
    get isLoaded() {
        return this.collections.reduce((acc, col) => (acc ? col.isLoaded : false), true);
    }
    /**
     * @private
     */
    get debugName() {
        return `${this.debugInstanceName || this.constructor.name}`;
    }
    toString() {
        return this.debugName;
    }
    /**
     * @private
     */
    get context() {
        return this.ctx;
    }
    /**
     * Called whenever a property of this class becomes observed.
     * @private
     */
    addObserverRef() {
        const res = ++this.observedRefCount;
        if (res === 1) {
            this.disposer = autorun(() => {
                const queries = this.queriesFn();
                runInAction(() => this._updateQueries(queries));
            });
        }
        return res;
    }
    /**
     * Called whenever a property of this class becomes un-observed.
     * @private
     */
    releaseObserverRef() {
        const res = --this.observedRefCount;
        if (res <= 0) {
            if (this.disposer) {
                this.disposer();
                this.disposer = undefined;
            }
        }
        return res;
    }
    /**
     * @private
     */
    _updateQueries(queries) {
        if (!queries) {
            return;
        }
        if (this.debug) {
            console.debug(this.debugName, 'updateQueries: ', queries);
        }
        // Copy all current documents into the document recyle map
        this.documentRecycleMap = {};
        Object.values(this.collectionRecycleMap).forEach((query) => {
            query.docs.forEach((doc) => {
                this.documentRecycleMap[doc.id] = doc;
            });
        });
        // console.log(Object.keys(this._documentRecycleMap));
        const cols = queries.map((query) => {
            let col = this.collectionRecycleMap[query.key];
            if (!col) {
                col = new Collection(this.collectionSource, {
                    createDocument: this._onCreateDocument,
                    debug: this.debug,
                    debugName: this.debugName + '.col: ' + query.key,
                    query: (ref) => (ref ? query.query(ref) : ref),
                });
            }
            return col;
        });
        // Update the query recycle map
        this.collectionRecycleMap = {};
        cols.forEach((col, index) => {
            const query = queries[index];
            this.collectionRecycleMap[query.key] = col;
        });
        // Update the queries
        if (!isEqual$2(cols, this.collections.slice(0))) {
            this.collections.replace(cols);
        }
    }
}

// Taken from https://github.com/firebase/geofire-js/blob/master/src/utils.ts
// And slightly modified to remove warnings and add the IGeoPoint type.
// Default geohash length
const GEOHASH_PRECISION = 10;
// Characters used in location geohashes
const BASE32 = '0123456789bcdefghjkmnpqrstuvwxyz';
// The meridional circumference of the earth in meters
const EARTH_MERI_CIRCUMFERENCE = 40007860;
// Length of a degree latitude at the equator
const METERS_PER_DEGREE_LATITUDE = 110574;
// Number of bits per geohash character
const BITS_PER_CHAR = 5;
// Maximum length of a geohash in bits
const MAXIMUM_BITS_PRECISION = 22 * BITS_PER_CHAR;
// Equatorial radius of the earth in meters
const EARTH_EQ_RADIUS = 6378137.0;
// The following value assumes a polar radius of
// const EARTH_POL_RADIUS = 6356752.3;
// The formulate to calculate E2 is
// E2 == (EARTH_EQ_RADIUS^2-EARTH_POL_RADIUS^2)/(EARTH_EQ_RADIUS^2)
// The exact value is used here to avoid rounding errors
const E2 = 0.00669447819799;
// Cutoff for rounding errors on double calculations
const EPSILON = 1e-12;
/*
function fromGeoPoint(point: IGeoPoint): number[] {
    return [point.latitude, point.longitude];
} */
function toGeoPoint(location) {
    return {
        latitude: location[0],
        longitude: location[1],
    };
}
function log2(x) {
    return Math.log(x) / Math.log(2);
}
/**
 * Validates the inputted location and throws an error if it is invalid.
 * @private
 * @param {object} location The {latitude, longitude} to be verified.
 */
function validateLatitude(latitude) {
    if (typeof latitude !== 'number' || isNaN(latitude)) {
        throw new Error('latitude must be a number');
    }
    else if (latitude < -90 || latitude > 90) {
        throw new Error('latitude must be within the range [-90, 90]');
    }
}
/**
 * @private
 */
function validateLongitude(longitude) {
    if (typeof longitude !== 'number' || isNaN(longitude)) {
        throw new Error('longitude must be a number');
    }
    else if (longitude < -180 || longitude > 180) {
        throw new Error('longitude must be within the range [-180, 180]');
    }
}
/**
 * @private
 */
function validateLocation(location) {
    try {
        if (!location) {
            throw new Error('location is empty');
        }
        validateLatitude(location.latitude);
        validateLongitude(location.longitude);
    }
    catch (err) {
        throw new Error(`Invalid location "${location}": ${err.message}`);
    }
}
/**
 * @private
 */
function validateRegion(region) {
    try {
        if (!region) {
            throw new Error('region is empty');
        }
        validateLatitude(region.latitude);
        validateLatitude(region.latitudeDelta);
        validateLongitude(region.longitude);
        validateLongitude(region.longitudeDelta);
    }
    catch (err) {
        throw new Error(`Invalid region "${region}": ${err.message}`);
    }
}
/**
 * Validates the inputted geohash and throws an error if it is invalid.
 * @private
 * @param {string} geohash The geohash to be validated.
 */
function validateGeohash(geohash) {
    let error;
    if (typeof geohash !== 'string') {
        error = 'geohash must be a string';
    }
    else if (geohash.length === 0) {
        error = 'geohash cannot be the empty string';
    }
    else {
        for (const letter of geohash) {
            if (BASE32.indexOf(letter) === -1) {
                error = "geohash cannot contain '" + letter + "'";
            }
        }
    }
    if (typeof error !== 'undefined') {
        throw new Error("Invalid geohash '" + geohash + "': " + error);
    }
}
/**
 * Converts a region into its geo points (nortEast, southWest, etc..).
 *
 * @param {IGeoRegion} region The region to convert
 */
function geoRegionToPoints(region) {
    const north = region.latitude - region.latitudeDelta * 0.5;
    const south = region.latitude + region.latitudeDelta * 0.5;
    const east = wrapLongitude(region.longitude + region.longitudeDelta * 0.5);
    const west = wrapLongitude(region.longitude - region.longitudeDelta * 0.5);
    return {
        northEast: { latitude: north, longitude: east },
        northWest: { latitude: north, longitude: west },
        southEast: { latitude: south, longitude: east },
        southWest: { latitude: south, longitude: west },
    };
}
/**
 * Converts degrees to radians.
 * @private
 * @param {number} degrees The number of degrees to be converted to radians.
 * @returns The number of radians equal to the inputted number of degrees.
 */
function degreesToRadians(degrees) {
    if (typeof degrees !== 'number' || isNaN(degrees)) {
        throw new Error('Error: degrees must be a number');
    }
    return (degrees * Math.PI) / 180;
}
/**
 * Encodes a geographical position (latitude/longitude) into a geohash tile.
 *
 * @param {object} location The {latitude, longitude} to encode into a geohash.
 * @param {number} [precision] The length of the geohash to create. If no precision is specified, the
 * default precision of `10` is used.
 * @returns The geohash of the inputted location.
 */
function encodeGeohash(location, precision = GEOHASH_PRECISION) {
    validateLocation(location);
    if (typeof precision !== 'undefined') {
        if (typeof precision !== 'number' || isNaN(precision)) {
            throw new Error('precision must be a number');
        }
        else if (precision <= 0) {
            throw new Error('precision must be greater than 0');
        }
        else if (precision > 22) {
            throw new Error('precision cannot be greater than 22');
        }
        else if (Math.round(precision) !== precision) {
            throw new Error('precision must be an integer');
        }
    }
    const latitudeRange = {
        max: 90,
        min: -90,
    };
    const longitudeRange = {
        max: 180,
        min: -180,
    };
    let hash = '';
    let hashVal = 0;
    let bits = 0;
    let even = 1;
    while (hash.length < precision) {
        const val = even ? location.longitude : location.latitude;
        const range = even ? longitudeRange : latitudeRange;
        const mid = (range.min + range.max) / 2;
        if (val > mid) {
            hashVal = (hashVal << 1) + 1;
            range.min = mid;
        }
        else {
            hashVal = (hashVal << 1) + 0;
            range.max = mid;
        }
        even = !even;
        if (bits < 4) {
            bits++;
        }
        else {
            bits = 0;
            hash += BASE32[hashVal];
            hashVal = 0;
        }
    }
    return hash;
}
/**
 * Decodes a geohash tile into a geographical position (latitude/longitude).
 *
 * @param {string} geohash - Geohash tile
 */
function decodeGeohash(geohash) {
    validateGeohash(geohash);
    let evenBit = true;
    let latMin = -90;
    let latMax = 90;
    let lonMin = -180;
    let lonMax = 180;
    for (let i = 0; i < geohash.length; i++) {
        const chr = geohash.charAt(i);
        const idx = BASE32.indexOf(chr);
        if (idx < 0) {
            throw new Error('Invalid geohash');
        }
        for (let n = 4; n >= 0; n--) {
            const bitN = (idx >> n) & 1;
            if (evenBit) {
                // longitude
                const lonMid = (lonMin + lonMax) / 2;
                if (bitN === 1) {
                    lonMin = lonMid;
                }
                else {
                    lonMax = lonMid;
                }
            }
            else {
                // latitude
                const latMid = (latMin + latMax) / 2;
                if (bitN === 1) {
                    latMin = latMid;
                }
                else {
                    latMax = latMid;
                }
            }
            evenBit = !evenBit;
        }
    }
    return [
        { latitude: latMin, longitude: lonMin },
        { latitude: latMax, longitude: lonMax }, // ne
    ];
}
/**
 * Calculates the number of longitude degrees over a given distance and at a given latitude.
 *
 * @param {number} distance The distance to convert.
 * @param {number} latitude The latitude at which to calculate.
 * @returns The number of degrees the distance corresponds to.
 */
function metersToLongitudeDegrees(distance, latitude) {
    const radians = degreesToRadians(latitude);
    const num = (Math.cos(radians) * EARTH_EQ_RADIUS * Math.PI) / 180;
    const denom = 1 / Math.sqrt(1 - E2 * Math.sin(radians) * Math.sin(radians));
    const deltaDeg = num * denom;
    if (deltaDeg < EPSILON) {
        return distance > 0 ? 360 : 0;
    }
    else {
        return Math.min(360, distance / deltaDeg);
    }
}
/**
 * Calculates the number of latitude degrees over a given distance.
 *
 * @param {number} distance The distance to convert.
 * @returns The number of degrees the distance corresponds to.
 */
function metersToLatitudeDegrees(distance) {
    return distance / METERS_PER_DEGREE_LATITUDE;
}
/**
 * Calculates the bits necessary to reach a given resolution, in meters, for the longitude at a
 * given latitude.
 * @ignore
 * @param {number} resolution The desired resolution.
 * @param {number} latitude The latitude used in the conversion.
 * @return The bits necessary to reach a given resolution, in meters.
 */
function longitudeBitsForResolution(resolution, latitude) {
    const degs = metersToLongitudeDegrees(resolution, latitude);
    return Math.abs(degs) > 0.000001 ? Math.max(1, log2(360 / degs)) : 1;
}
/**
 * Calculates the bits necessary to reach a given resolution, in meters, for the latitude.
 * @ignore
 * @param {number} resolution The bits necessary to reach a given resolution, in meters.
 * @returns Bits necessary to reach a given resolution, in meters, for the latitude.
 */
function latitudeBitsForResolution(resolution) {
    return Math.min(log2(EARTH_MERI_CIRCUMFERENCE / 2 / resolution), MAXIMUM_BITS_PRECISION);
}
/**
 * Wraps the longitude to [-180,180].
 * @private
 * @param {number} longitude The longitude to wrap.
 * @returns longitude The resulting longitude.
 */
function wrapLongitude(longitude) {
    if (longitude <= 180 && longitude >= -180) {
        return longitude;
    }
    const adjusted = longitude + 180;
    if (adjusted > 0) {
        return (adjusted % 360) - 180;
    }
    else {
        return 180 - (-adjusted % 360);
    }
}
/**
 * Calculates the maximum number of bits of a geohash to get a bounding box that is larger than a
 * given size at the given coordinate.
 * @ignore
 * @param {object} coordinate The coordinate as a {latitude, longitude}.
 * @param {number} size The size of the bounding box.
 * @returns The number of bits necessary for the geohash.
 */
function boundingBoxBits(coordinate, size) {
    const latDeltaDegrees = size / METERS_PER_DEGREE_LATITUDE;
    const latitudeNorth = Math.min(90, coordinate.latitude + latDeltaDegrees);
    const latitudeSouth = Math.max(-90, coordinate.latitude - latDeltaDegrees);
    const bitsLat = Math.floor(latitudeBitsForResolution(size)) * 2;
    const bitsLongNorth = Math.floor(longitudeBitsForResolution(size, latitudeNorth)) * 2 - 1;
    const bitsLongSouth = Math.floor(longitudeBitsForResolution(size, latitudeSouth)) * 2 - 1;
    return Math.min(bitsLat, bitsLongNorth, bitsLongSouth, MAXIMUM_BITS_PRECISION);
}
function boundingBoxBitsForRegion(region) {
    const { northEast, southEast, northWest, southWest } = geoRegionToPoints(region);
    const bitsLat = Math.floor(latitudeBitsForResolution(calculateGeoDistance(northEast, southEast) * 0.5)) * 2;
    const bitsLongNorth = Math.floor(longitudeBitsForResolution(calculateGeoDistance(northEast, northWest) * 0.5, northWest.latitude)) *
        2 -
        1;
    const bitsLongSouth = Math.floor(longitudeBitsForResolution(calculateGeoDistance(southEast, southWest) * 0.5, southWest.latitude)) *
        2 -
        1;
    return Math.min(bitsLat, bitsLongNorth, bitsLongSouth, MAXIMUM_BITS_PRECISION);
}
/**
 * Calculates eight points on the bounding box and the center of a given circle. At least one
 * geohash of these nine coordinates, truncated to a precision of at most radius, are guaranteed
 * to be prefixes of any geohash that lies within the circle.
 * @ignore
 * @param {object} center The center given as {latitude, longitude}.
 * @param {number} radius The radius of the circle in meters.
 * @returns The eight bounding box points.
 */
function boundingBoxCoordinates(center, radius) {
    const latDegrees = radius / METERS_PER_DEGREE_LATITUDE;
    const latitudeNorth = Math.min(90, center.latitude + latDegrees);
    const latitudeSouth = Math.max(-90, center.latitude - latDegrees);
    const longDegsNorth = metersToLongitudeDegrees(radius, latitudeNorth);
    const longDegsSouth = metersToLongitudeDegrees(radius, latitudeSouth);
    const longDegs = Math.max(longDegsNorth, longDegsSouth);
    return [
        [center.latitude, center.longitude],
        [center.latitude, wrapLongitude(center.longitude - longDegs)],
        [center.latitude, wrapLongitude(center.longitude + longDegs)],
        [latitudeNorth, center.longitude],
        [latitudeNorth, wrapLongitude(center.longitude - longDegs)],
        [latitudeNorth, wrapLongitude(center.longitude + longDegs)],
        [latitudeSouth, center.longitude],
        [latitudeSouth, wrapLongitude(center.longitude - longDegs)],
        [latitudeSouth, wrapLongitude(center.longitude + longDegs)],
    ];
}
/**
 * Calculates eight points on the bounding box and the center of a region box. At least one
 * geohash of these nine coordinates, truncated to a precision of at most radius, are guaranteed
 * to be prefixes of any geohash that lies within the circle.
 * @ignore
 * @param {object} region The region given as {latitude, longitude, latitudeDelta, longitudeDelta}.
 * @returns The eight bounding box points.
 */
function boundingBoxCoordinatesForRegion(region) {
    const { northEast, northWest, southWest } = geoRegionToPoints(region);
    return [
        [region.latitude, region.longitude],
        [region.latitude, northEast.longitude],
        [region.latitude, northWest.longitude],
        [northWest.latitude, region.longitude],
        [northWest.latitude, northEast.longitude],
        [northWest.latitude, northWest.longitude],
        [southWest.latitude, region.longitude],
        [southWest.latitude, northEast.longitude],
        [southWest.latitude, northWest.longitude],
    ];
}
/**
 * Calculates the bounding box query for a geohash with x bits precision.
 * @ignore
 * @param {string} geohash The geohash whose bounding box query to generate.
 * @param {number} bits The number of bits of precision.
 * @returns A [start, end] pair of geohashes.
 */
function geohashQuery(geohash1, bits) {
    validateGeohash(geohash1);
    const precision = Math.ceil(bits / BITS_PER_CHAR);
    if (geohash1.length < precision) {
        return [geohash1, geohash1 + '~'];
    }
    const geohash = geohash1.substring(0, precision);
    const base = geohash.substring(0, geohash.length - 1);
    const lastValue = BASE32.indexOf(geohash.charAt(geohash.length - 1));
    const significantBits = bits - base.length * BITS_PER_CHAR;
    const unusedBits = BITS_PER_CHAR - significantBits;
    // delete unused bits
    const startValue = (lastValue >> unusedBits) << unusedBits;
    const endValue = startValue + (1 << unusedBits);
    if (endValue > 31) {
        return [base + BASE32[startValue], base + '~'];
    }
    else {
        return [base + BASE32[startValue], base + BASE32[endValue]];
    }
}
/**
 * Calculates a set of geohash queries to fully contain a given circle. A query is a [start, end] pair
 * where any geohash is guaranteed to be lexiographically larger then start and smaller than end.
 *
 * @param {object} center The center given as {latitude, longitude}.
 * @param {number} radius The radius of the circle in meters.
 * @return An array of geohashes containing a [start, end] pair.
 */
function getGeohashesForRadius(center, radius) {
    validateLocation(center);
    const bits = Math.max(1, boundingBoxBits(center, radius));
    const precision = Math.ceil(bits / BITS_PER_CHAR);
    const coordinates = boundingBoxCoordinates(center, radius);
    const queries = coordinates.map((coordinate) => {
        return geohashQuery(encodeGeohash(toGeoPoint(coordinate), precision), bits);
    });
    // remove duplicates
    return queries.filter((query, index) => {
        return !queries.some((other, otherIndex) => {
            return index > otherIndex && query[0] === other[0] && query[1] === other[1];
        });
    });
}
/**
 * Calculates a set of geohash queries to fully contain a given region box. A query is a [start, end] pair
 * where any geohash is guaranteed to be lexiographically larger then start and smaller than end.
 *
 * @param {object} region The region given as {latitude, longitude, latitudeDelta, longitudeDelta}.
 * @return An array of geohashes containing a [start, end] pair.
 */
function getGeohashesForRegion(region) {
    validateRegion(region);
    const bits = Math.max(1, boundingBoxBitsForRegion(region));
    const precision = Math.ceil(bits / BITS_PER_CHAR);
    const coordinates = boundingBoxCoordinatesForRegion(region);
    const queries = coordinates.map((coordinate) => {
        const geohash = encodeGeohash(toGeoPoint(coordinate), precision);
        const query = geohashQuery(geohash, bits);
        /* console.log(
                geohash,
                ", index: ",
                index,
                ", query: ",
                query,
                ", precision: ",
                precision
            ); */
        return query;
    });
    // remove duplicates
    return queries.filter((query, index) => {
        return !queries.some((other, otherIndex) => {
            return index > otherIndex && query[0] === other[0] && query[1] === other[1];
        });
    });
}
/**
 * Flattens a query start-geohash; and end-geohash into all its individual geohash components.
 *
 * @param {string} geohash1 The geohash from range
 * @param {string} geohash2 The geohash to range
 */
function flattenGeohashRange(geohash1, geohash2) {
    if (geohash1.length !== geohash2.length) {
        throw new Error('Geohash lengths must be the same');
    }
    const res = [geohash1];
    let hash = geohash1;
    while (hash < geohash2) {
        for (let i = geohash1.length - 1; i >= 0; i--) {
            const idx = BASE32.indexOf(hash.charAt(i));
            if (idx < BASE32.length - 1) {
                hash = hash.substring(0, i) + BASE32[idx + 1] + hash.substring(i + 1);
                if (hash < geohash2) {
                    res.push(hash);
                }
                break;
            }
            else {
                hash = hash.substring(0, i) + BASE32[0] + hash.substring(i + 1);
            }
            if (hash >= geohash2) {
                break;
            }
        }
    }
    return res;
}
/**
 * Flattens a set of geo-hash queries into a single array of geohash tiles.
 *
 * @param {string[][]} geohashes The geohashes array
 */
function flattenGeohashes(geohashes) {
    const set = new Set();
    geohashes.forEach((a) => flattenGeohashRange(a[0], a[1]).forEach((geohash) => set.add(geohash)));
    return Array.from(set);
}
/**
 * Method which calculates the distance, in meters, between two locations,
 * via the Haversine formula. Note that this is approximate due to the fact that the
 * Earth's radius varies between 6356.752 km and 6378.137 km.
 *
 * @param {object} location1 The {latitude, longitude} of the first location.
 * @param {object} location2 The {latitude, longitude} of the second location.
 * @returns The distance, in meters, between the inputted locations.
 */
function calculateGeoDistance(location1, location2) {
    validateLocation(location1);
    validateLocation(location2);
    const radius = 6371; // Earth's radius in kilometers
    const latDelta = degreesToRadians(location2.latitude - location1.latitude);
    const lonDelta = degreesToRadians(location2.longitude - location1.longitude);
    const a = Math.sin(latDelta / 2) * Math.sin(latDelta / 2) +
        Math.cos(degreesToRadians(location1.latitude)) *
            Math.cos(degreesToRadians(location2.latitude)) *
            Math.sin(lonDelta / 2) *
            Math.sin(lonDelta / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return radius * c * 1000;
}
function insideGeoRegion(point, region) {
    if (point.latitude < region.latitude - region.latitudeDelta * 0.5 ||
        point.latitude > region.latitude + region.latitudeDelta * 0.5) {
        return false;
    }
    // TODO - wrap longitude?
    if (point.longitude < region.longitude - region.longitudeDelta * 0.5 ||
        point.longitude > region.longitude + region.longitudeDelta * 0.5) {
        return false;
    }
    return true;
}

/**
 * GeoQuery makes it possible to perform efficient geographical based queries
 * with the use of geo-hashes.
 *
 * In order to use GeoQuery, each document needs a `geohash` field stored in the
 * root of the document. The value of the `geohash` field should be a geo-hash
 * encoded using `encodeGeohash`.
 *
 * @extends AggregateCollection
 * @param {CollectionSource} [source] String-path, ref or function that returns a path or ref
 * @param {Object} [options] Configuration options
 * @param {IGeoRegion} [options.region] See `GeoQuery.region`
 * @param {string} [options.fieldPath] Field to query on (default = `geohash`)
 *
 * @example
 *
 * const query = new GeoQuery('bookings', {
 *   region = {
 *     latitude: 51.45663,
 *     longitude: 5.223,
 *     latitudeDelta: 0.1,
 *     longitudeDelta: 0.1,
 *   }
 * });
 *
 * // Bookings needs to contain documents with a `geohash`
 * // field in the root, like this:
 * // {
 * //   ...
 * //   geohash: 'jhdb23'
 * //   ...
 * // }
 *
 * autorun(() => {
 *   query.docs.map(doc => console.log('doc: ', doc.id, doc.data));
 * });
 */
class GeoQuery extends AggregateCollection {
    constructor(source, options) {
        const _a = options || {}, { region, fieldPath = 'geohash', filterBy } = _a, otherOptions = __rest(_a, ["region", "fieldPath", "filterBy"]);
        const regionObservable = observable.box(region);
        super(source, Object.assign({ filterBy: filterBy
                ? (doc) => {
                    let regionVal = regionObservable.get();
                    regionVal = typeof regionVal === 'function' ? regionVal() : regionVal;
                    return filterBy(doc, regionVal);
                }
                : undefined, queries: () => {
                let regionVal = regionObservable.get();
                regionVal = typeof regionVal === 'function' ? regionVal() : regionVal;
                const geohashes = regionVal ? getGeohashesForRegion(regionVal) : undefined;
                if (!geohashes) {
                    return null;
                }
                return geohashes.map((geohash) => ({
                    geohash,
                    key: `${geohash[0]}-${geohash[1]}`,
                    query: (ref) => query(ref, where(fieldPath, '>=', geohash[0]), where(fieldPath, '<', geohash[1])),
                }));
            } }, otherOptions));
        this.regionObservable = regionObservable;
        makeObservable(this, {
            geohashes: computed,
        });
    }
    /**
     * Geographical region to query for.
     *
     * Use this property to get or set the region in which
     * to perform a aggregate geohash query.
     *
     * @type {GeoQueryRegion}
     *
     * @example
     * const query = new GeoQuery('bookings');
     *
     * // Bookings needs to contain documents with a `geohash`
     * // field in the root, like this:
     * // {
     * //   ...
     * //   geohash: 'jhdb23'
     * //   ...
     * // }
     *
     * ...
     * // Set the region to query for
     * query.region = {
     *   latitude: 51.45663,
     *   longitude: 5.223,
     *   latitudeDelta: 0.1,
     *   longitudeDelta: 0.1,
     * }
     */
    get region() {
        return this.regionObservable.get();
    }
    set region(val) {
        runInAction(() => this.regionObservable.set(val));
    }
    /**
     * Geo-hashes that are queries for the given region.
     *
     * @type {GeoQueryHash[]}
     *
     * @example
     * const query = new GeoQuery('bookings', {
     *   region: {
     *     latitude: 51.45663,
     *     longitude: 5.223,
     *     latitudeDelta: 0.1,
     *     longitudeDelta: 0.1
     *   }
     * });
     * ...
     * // Get the in-use geohashes
     * console.log(query.geohashes);
     * // [['todo', 'todo2], ...]
     */
    get geohashes() {
        const queries = this.queries();
        return queries ? queries.map((query) => query.geohash) : [];
    }
}

export { AggregateCollection, Collection, Document, GeoQuery, Mode, calculateGeoDistance, decodeGeohash, encodeGeohash, flattenGeohashRange, flattenGeohashes, geoRegionToPoints, getFirebaseApp, getFirestore, getGeohashesForRadius, getGeohashesForRegion, initFirestorter, insideGeoRegion, isTimestamp, makeFirestorterContext, mergeUpdateData, metersToLatitudeDegrees, metersToLongitudeDegrees };
