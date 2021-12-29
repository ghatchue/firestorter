/** Firestorter - (c) Hein Rutjes 2017 - 2019 - MIT Licensed */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('mobx'), require('firebase/firestore'), require('firebase/app')) :
    typeof define === 'function' && define.amd ? define(['exports', 'mobx', 'firebase/firestore', 'firebase/app'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.firestorter = {}, global.mobx, global.firestore, global.app));
}(this, (function (exports, mobx, firestore, app) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

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

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    /**
     * Real-time updating mode.
     * @type Mode
     */
    (function (Mode) {
        Mode["Auto"] = "auto";
        Mode["On"] = "on";
        Mode["Off"] = "off";
    })(exports.Mode || (exports.Mode = {}));

    var isEqual = require('lodash.isequal');
    /**
     * Helper function which merges data into the source
     * and returns the new object.
     *
     * @param {Object} data - JSON data
     * @param {Object} fields - JSON data that supports field-paths
     * @return {Object} Result
     */
    function mergeUpdateData(data, fields, _hasContext) {
        var res = __assign({}, data);
        var canonicalDelete = firestore.deleteField();
        for (var key in fields) {
            if (fields.hasOwnProperty(key)) {
                var val = fields[key];
                var isDelete = canonicalDelete.isEqual
                    ? canonicalDelete.isEqual(val)
                    : isEqual(canonicalDelete, val);
                var paths = key.split('.');
                var dataVal = res;
                for (var i = 0; i < paths.length - 1; i++) {
                    if (dataVal[paths[i]] === undefined) {
                        if (isDelete) {
                            dataVal = undefined;
                            break;
                        }
                        dataVal[paths[i]] = {};
                    }
                    else {
                        dataVal[paths[i]] = __assign({}, dataVal[paths[i]]);
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
        var o = Array.isArray(data) ? mobx.observable.array(data) : mobx.observable.box(data);
        var isObserved = false;
        mobx.onBecomeUnobserved(o, undefined, function () {
            if (isObserved) {
                isObserved = false;
                delegate.releaseObserverRef();
            }
        });
        mobx.onBecomeObserved(o, undefined, function () {
            if (!isObserved) {
                isObserved = true;
                delegate.addObserverRef();
            }
        });
        return o;
    }

    var ModuleName = 'firestorter';
    var globalContext;
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
        var firebaseApp = (config === null || config === void 0 ? void 0 : config.app)
            ? typeof config.app === 'string'
                ? app.getApp(config.app)
                : config.app
            : app.getApp();
        // Get firestore instance
        var firestore$1 = (config === null || config === void 0 ? void 0 : config.firestore) || firestore.getFirestore(firebaseApp);
        if (!firestore$1) {
            throw new Error("getFirestore() returned `undefined`, did you forget `import 'firebase/firestore';` ?");
        }
        // Verify existence of firestore & fieldvalue
        try {
            firestore.deleteField();
        }
        catch (err) {
            throw new Error('Invalid `firebase` argument specified: `FieldValue.delete` does not exist');
        }
        return {
            app: firebaseApp,
            firestore: firestore$1,
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
            throw new Error("No context for " + obj + " or globally. Did you forget to call `initFirestorter` or pass {context: ...} option?");
        }
        throw new Error("No global Firestore context. Did you forget to call `initFirestorter` ?");
    }
    function contextWithProperty(key, obj) {
        try {
            var context = getContext(obj);
            if (context[key]) {
                return context;
            }
            throw new Error("Context does not contain " + key);
        }
        catch (err) {
            throw new Error(ModuleName + ": cannot get " + key + ": " + err);
        }
    }
    function getFirebaseApp(obj) {
        return contextWithProperty('app', obj).app;
    }
    function getFirestore(obj) {
        return contextWithProperty('firestore', obj).firestore;
    }

    var isEqual$1 = require('lodash.isequal');
    /**
     * @private
     */
    function resolveRef(value, hasContext) {
        if (typeof value === 'string') {
            return firestore.doc(getFirestore(hasContext), value);
        }
        else if (typeof value === 'function') {
            return resolveRef(value(), hasContext);
        }
        else {
            return value;
        }
    }
    var EMPTY_OPTIONS = {};
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
    var Document = /** @class */ (function () {
        function Document(source, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            var schema = options.schema, snapshot = options.snapshot, snapshotOptions = options.snapshotOptions, mode = options.mode, debug = options.debug, debugName = options.debugName, context = options.context;
            this.debugInstanceName = debugName;
            this.sourceInput = source;
            this.ctx = context;
            this.refObservable = mobx.observable.box(resolveRef(source, this));
            this.docSchema = schema;
            this.isVerbose = debug || false;
            this.snapshotObservable = enhancedObservable(snapshot, this);
            this.snapshotOptions = snapshotOptions;
            this.collectionRefCount = 0;
            this.observedRefCount = 0;
            var data = snapshot ? snapshot.data(this.snapshotOptions) : undefined;
            if (data) {
                data = this._validateSchema(data);
            }
            this.dataObservable = enhancedObservable(data || EMPTY_OPTIONS, this);
            this.modeObservable = mobx.observable.box(verifyMode(mode || exports.Mode.Auto));
            this.isLoadingObservable = mobx.observable.box(false);
            this._updateSourceObserver();
            if (mode === exports.Mode.On) {
                mobx.runInAction(function () { return _this._updateRealtimeUpdates(); });
            }
        }
        Object.defineProperty(Document.prototype, "schema", {
            /**
             * Returns the superstruct schema used to validate the
             * document, or undefined.
             *
             * @type {Function}
             */
            get: function () {
                return this.docSchema;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "data", {
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
            get: function () {
                return this.dataObservable.get();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "hasData", {
            /**
             * True whenever the document has fetched any data.
             *
             * @type {boolean}
             */
            get: function () {
                var snapshot = this.snapshot;
                return !!snapshot && snapshot.exists();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "ref", {
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
            get: function () {
                return this.refObservable.get();
            },
            set: function (ref) {
                this.source = ref;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "id", {
            /**
             * Id of the firestore document.
             *
             * To get the full-path of the document, use `path`.
             *
             * @type {string}
             */
            get: function () {
                var ref = this.refObservable.get();
                return ref ? ref.id : undefined;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "path", {
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
            get: function () {
                var _a;
                // if we call toString() during initialization, eg to throw an error referring to this
                // document, this would throw an undefined error without the guard.
                var ref = (_a = this.refObservable) === null || _a === void 0 ? void 0 : _a.get();
                if (!ref) {
                    return undefined;
                }
                var path = ref.id;
                while (ref.parent) {
                    path = ref.parent.id + '/' + path;
                    ref = ref.parent;
                }
                return path;
            },
            set: function (documentPath) {
                this.source = documentPath;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "source", {
            /**
             * @private
             */
            get: function () {
                return this.sourceInput;
            },
            set: function (source) {
                var _this = this;
                if (this.collectionRefCount) {
                    throw new Error('Cannot change source on Document that is controlled by a Collection');
                }
                if (this.sourceInput === source) {
                    return;
                }
                this.sourceInput = source;
                this._updateSourceObserver();
                mobx.runInAction(function () {
                    _this.refObservable.set(resolveRef(source, _this));
                    _this._updateRealtimeUpdates(true);
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "mode", {
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
            get: function () {
                return this.modeObservable.get();
            },
            set: function (mode) {
                var _this = this;
                if (this.modeObservable.get() === mode) {
                    return;
                }
                verifyMode(mode);
                mobx.runInAction(function () {
                    _this.modeObservable.set(mode);
                    _this._updateRealtimeUpdates();
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "isActive", {
            /**
             * Returns true when the Document is actively listening
             * for changes in the firestore back-end.
             *
             * @type {boolean}
             */
            get: function () {
                return !!this.onSnapshotUnsubscribeFn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "snapshot", {
            /**
             * Underlying firestore snapshot.
             *
             * @type {firestore.DocumentSnapshot}
             */
            get: function () {
                return this.snapshotObservable.get();
            },
            enumerable: false,
            configurable: true
        });
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
        Document.prototype.update = function (fields) {
            var ref = this.refObservable.get();
            if (this.docSchema) {
                if (!this.snapshot) {
                    console.warn(this.debugName + " - Unable to verify schema in .update() because the document has not been fetched yet");
                }
                else {
                    try {
                        this._validateSchema(mergeUpdateData(mobx.toJS(this.data), fields));
                    }
                    catch (err) {
                        return Promise.reject(err);
                    }
                }
            }
            return firestore.updateDoc(ref, fields);
        };
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
        Document.prototype.set = function (data, options) {
            if (this.docSchema) {
                try {
                    if (options === null || options === void 0 ? void 0 : options.merge) {
                        this._validateSchema(mergeUpdateData(mobx.toJS(this.data), data));
                    }
                    else {
                        this._validateSchema(data);
                    }
                }
                catch (err) {
                    return Promise.reject(err);
                }
            }
            return firestore.setDoc(this.refObservable.get(), data, options);
        };
        /**
         * Deletes the document in Firestore.
         *
         * Returns a promise that resolves once the document has been
         * successfully deleted from the backend (Note that it won't
         * resolve while you're offline).
         *
         * @return {Promise}
         */
        Document.prototype.delete = function () {
            return firestore.deleteDoc(this.refObservable.get());
        };
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
        Document.prototype.fetch = function () {
            return __awaiter(this, void 0, void 0, function () {
                var ref, snapshot_1, err_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.isVerbose) {
                                console.debug(this.debugName + " - fetching...");
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
                            ref = this.refObservable.get();
                            if (!ref) {
                                throw new Error('No ref or path set on Document');
                            }
                            mobx.runInAction(function () {
                                _this._ready(false);
                                _this.isLoadingObservable.set(true);
                            });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, firestore.getDoc(ref)];
                        case 2:
                            snapshot_1 = _a.sent();
                            mobx.runInAction(function () {
                                _this.isLoadingObservable.set(false);
                                _this._updateFromSnapshot(snapshot_1);
                                if (_this.isVerbose) {
                                    console.debug(_this.debugName + " - fetched: " + JSON.stringify(mobx.toJS(_this.data)));
                                }
                            });
                            this._ready(true);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            console.log(this.debugName + " - fetch failed: " + err_1.message);
                            mobx.runInAction(function () {
                                _this.isLoadingObservable.set(false);
                                _this._updateFromSnapshot(undefined);
                                _this._ready(true);
                            });
                            throw err_1;
                        case 4: return [2 /*return*/, this];
                    }
                });
            });
        };
        Object.defineProperty(Document.prototype, "isLoading", {
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
            get: function () {
                this.dataObservable.get(); // access data
                return this.isLoadingObservable.get();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "isLoaded", {
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
            get: function () {
                var snapshot = this.snapshot;
                return !!snapshot;
            },
            enumerable: false,
            configurable: true
        });
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
        Document.prototype.ready = function () {
            this.readyPromise = this.readyPromise || Promise.resolve();
            return this.readyPromise;
        };
        Document.prototype.toString = function () {
            return this.debugName;
        };
        Object.defineProperty(Document.prototype, "debugName", {
            /**
             * @private
             */
            get: function () {
                return (this.debugInstanceName || this.constructor.name) + " (" + this.path + ")";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "context", {
            /**
             * @private
             */
            get: function () {
                return this.ctx;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Called whenever a property of this class becomes observed.
         * @private
         */
        Document.prototype.addObserverRef = function () {
            var _this = this;
            if (this.isVerbose) {
                console.debug(this.debugName + " - addRef (" + (this.observedRefCount + 1) + ")");
            }
            var res = ++this.observedRefCount;
            if (res === 1) {
                mobx.runInAction(function () { return _this._updateRealtimeUpdates(); });
            }
            return res;
        };
        /**
         * Called whenever a property of this class becomes un-observed.
         * @private
         */
        Document.prototype.releaseObserverRef = function () {
            var _this = this;
            if (this.isVerbose) {
                console.debug(this.debugName + " - releaseRef (" + (this.observedRefCount - 1) + ")");
            }
            var res = --this.observedRefCount;
            if (!res) {
                mobx.runInAction(function () { return _this._updateRealtimeUpdates(); });
            }
            return res;
        };
        /**
         * ICollectionDocument
         * @private
         */
        Document.prototype.addCollectionRef = function () {
            return ++this.collectionRefCount;
        };
        Document.prototype.releaseCollectionRef = function () {
            return --this.collectionRefCount;
        };
        Document.prototype.updateFromCollectionSnapshot = function (snapshot) {
            return this._updateFromSnapshot(snapshot);
        };
        /**
         * @private
         */
        Document.prototype._updateFromSnapshot = function (snapshot) {
            var data = snapshot ? snapshot.data(this.snapshotOptions) : undefined;
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
        };
        /**
         * @private
         */
        Document.prototype._ready = function (complete) {
            var _this = this;
            if (complete) {
                var readyResolve = this.readyResolveFn;
                if (readyResolve) {
                    this.readyResolveFn = undefined;
                    readyResolve();
                }
            }
            else if (!this.readyResolveFn) {
                this.readyPromise = new Promise(function (resolve) {
                    _this.readyResolveFn = resolve;
                });
            }
        };
        /**
         * @private
         */
        Document.prototype._onSnapshot = function (snapshot) {
            var _this = this;
            mobx.runInAction(function () {
                if (_this.isVerbose) {
                    console.debug(_this.debugName + " - onSnapshot");
                }
                _this.isLoadingObservable.set(false);
                try {
                    _this._updateFromSnapshot(snapshot);
                }
                catch (err) {
                    console.error(err.message);
                }
                _this._ready(true);
            });
        };
        /**
         * @private
         */
        Document.prototype._onSnapshotError = function (error) {
            console.warn(this.debugName + " - onSnapshotError: " + error.message);
        };
        /**
         * @private
         */
        Document.prototype._updateRealtimeUpdates = function (force) {
            var _this = this;
            var newActive = false;
            switch (this.modeObservable.get()) {
                case exports.Mode.Auto:
                    newActive = !!this.observedRefCount;
                    break;
                case exports.Mode.Off:
                    newActive = false;
                    break;
                case exports.Mode.On:
                    newActive = true;
                    break;
            }
            // Start/stop listening for snapshot updates
            if (this.collectionRefCount || !this.refObservable.get()) {
                newActive = false;
            }
            var active = !!this.onSnapshotUnsubscribeFn;
            if (newActive && (!active || force)) {
                if (this.isVerbose) {
                    console.debug(this.debugName + " - " + (active ? 're-' : '') + "start (" + this.modeObservable.get() + ":" + this.observedRefCount + ")");
                }
                this._ready(false);
                this.isLoadingObservable.set(true);
                if (this.onSnapshotUnsubscribeFn) {
                    this.onSnapshotUnsubscribeFn();
                }
                this.onSnapshotUnsubscribeFn = firestore.onSnapshot(this.refObservable.get(), {
                    next: function (snapshot) { return _this._onSnapshot(snapshot); },
                    error: function (err) { return _this._onSnapshotError(err); },
                });
            }
            else if (!newActive && active) {
                if (this.isVerbose) {
                    console.debug(this.debugName + " - stop (" + this.modeObservable.get() + ":" + this.observedRefCount + ")");
                }
                this.onSnapshotUnsubscribeFn();
                this.onSnapshotUnsubscribeFn = undefined;
                if (this.isLoadingObservable.get()) {
                    this.isLoadingObservable.set(false);
                }
                this._ready(true);
            }
        };
        /**
         * @private
         */
        Document.prototype._updateSourceObserver = function () {
            var _this = this;
            if (this.sourceDisposerFn) {
                this.sourceDisposerFn();
                this.sourceDisposerFn = undefined;
            }
            if (typeof this.sourceInput === 'function') {
                this.sourceDisposerFn = mobx.reaction(function () { return _this.sourceInput(); }, function (value) {
                    mobx.runInAction(function () {
                        // TODO, check whether path has changed
                        _this.refObservable.set(resolveRef(value, _this));
                        _this._updateRealtimeUpdates(true);
                    });
                });
            }
        };
        /**
         * @private
         */
        Document.prototype._validateSchema = function (data) {
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
        };
        return Document;
    }());

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
    var Collection = /** @class */ (function () {
        // private _limit: any;
        // private _cursor: any;
        function Collection(source, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            var query = options.query, createDocument = options.createDocument, mode = options.mode, 
            // limit,
            debug = options.debug, debugName = options.debugName, _a = options.minimizeUpdates, minimizeUpdates = _a === void 0 ? false : _a, _b = options.initialLocalSnapshotDetectTime, initialLocalSnapshotDetectTime = _b === void 0 ? 50 : _b, _c = options.initialLocalSnapshotDebounceTime, initialLocalSnapshotDebounceTime = _c === void 0 ? 1000 : _c, context = options.context;
            this.isVerbose = debug || false;
            this.debugInstanceName = debugName;
            this.isMinimizingUpdates = minimizeUpdates;
            this.initialLocalSnapshotDetectTime = initialLocalSnapshotDetectTime;
            this.initialLocalSnapshotDebounceTime = initialLocalSnapshotDebounceTime;
            this.docLookup = {};
            this.observedRefCount = 0;
            this.sourceInput = source;
            this.refObservable = mobx.observable.box(undefined);
            this.queryInput = query;
            this.queryRefObservable = mobx.observable.box(undefined);
            // this._limit = observable.box(limit || undefined);
            // this._cursor = observable.box(undefined);
            this.modeObservable = mobx.observable.box(verifyMode(mode || exports.Mode.Auto));
            this.isLoadingObservable = mobx.observable.box(false);
            this.isLoadedObservable = mobx.observable.box(false);
            this.hasDocsObservable = enhancedObservable(false, this);
            this.docsObservable = enhancedObservable([], this);
            this.ctx = context;
            if (createDocument) {
                this.createDocument = createDocument;
            }
            else {
                this.createDocument = function (docSource, docOptions) {
                    return new Document(docSource, docOptions);
                };
            }
            mobx.runInAction(function () { return _this._updateRealtimeUpdates(true, true); });
        }
        Object.defineProperty(Collection.prototype, "docs", {
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
            get: function () {
                return this.docsObservable;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "hasDocs", {
            /**
             * True whenever the docs array is not empty.
             *
             * @type {boolean}
             */
            get: function () {
                return this.hasDocsObservable.get();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "ref", {
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
            get: function () {
                var ref = this.refObservable.get();
                if (!this.refDisposerFn) {
                    ref = this._resolveRef(this.sourceInput);
                }
                return ref;
            },
            set: function (ref) {
                this.source = ref;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "id", {
            /**
             * Id of the Firestore collection (e.g. 'tracks').
             *
             * To get the full-path of the collection, use `path`.
             *
             * @type {string}
             */
            get: function () {
                var ref = this.ref;
                return ref ? ref.id : undefined;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "path", {
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
            get: function () {
                var ref = this.ref;
                if (!ref) {
                    return undefined;
                }
                var path = ref.id;
                while (ref.parent) {
                    path = ref.parent.id + '/' + path;
                    ref = ref.parent;
                }
                return path;
            },
            set: function (collectionPath) {
                this.source = collectionPath;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "source", {
            /**
             * @private
             */
            get: function () {
                return this.sourceInput;
            },
            set: function (source) {
                var _this = this;
                if (this.sourceInput === source) {
                    return;
                }
                mobx.runInAction(function () {
                    _this.sourceInput = source;
                    // Stop any reactions
                    if (_this.refDisposerFn) {
                        _this.refDisposerFn();
                        _this.refDisposerFn = undefined;
                    }
                    // Update real-time updating
                    _this._updateRealtimeUpdates(true);
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "query", {
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
            get: function () {
                return this.queryInput;
            },
            set: function (query) {
                var _this = this;
                if (this.queryInput === query) {
                    return;
                }
                mobx.runInAction(function () {
                    _this.queryInput = query;
                    // Stop any reactions
                    if (_this.refDisposerFn) {
                        _this.refDisposerFn();
                        _this.refDisposerFn = undefined;
                    }
                    // Update real-time updating
                    _this._updateRealtimeUpdates(undefined, true);
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "queryRef", {
            /**
             * @private
             * firestore.Query -> a valid query exists, use that
             * null -> the query function returned `null` to disable the collection
             * undefined -> no query defined, use collection ref instead
             */
            get: function () {
                return this.queryRefObservable.get();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "mode", {
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
            get: function () {
                return this.modeObservable.get();
            },
            set: function (mode) {
                var _this = this;
                if (this.modeObservable.get() === mode) {
                    return;
                }
                verifyMode(mode);
                mobx.runInAction(function () {
                    _this.modeObservable.set(mode);
                    _this._updateRealtimeUpdates();
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "isActive", {
            /**
             * Returns true when the Collection is actively listening
             * for changes in the firestore back-end.
             *
             * @type {boolean}
             */
            get: function () {
                return !!this.onSnapshotUnsubscribe;
            },
            enumerable: false,
            configurable: true
        });
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
        Collection.prototype.fetch = function () {
            return __awaiter(this, void 0, void 0, function () {
                var colRef, queryRef, ref, snapshot_1, err_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.isVerbose) {
                                console.debug(this.debugName + " - fetching...");
                            }
                            if (this.isActive) {
                                throw new Error('Should not call fetch when real-time updating is active');
                            }
                            if (this.isLoadingObservable.get()) {
                                throw new Error('Fetch already in progress');
                            }
                            colRef = this._resolveRef(this.sourceInput);
                            queryRef = this._resolveQuery(colRef, this.queryInput);
                            ref = queryRef !== undefined ? queryRef : colRef;
                            if (!ref) {
                                throw new Error('No ref, path or query set on Collection');
                            }
                            mobx.runInAction(function () {
                                _this._ready(false);
                                _this.isLoadingObservable.set(true);
                            });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, firestore.getDocs(ref)];
                        case 2:
                            snapshot_1 = _a.sent();
                            mobx.runInAction(function () {
                                _this.isLoadingObservable.set(false);
                                _this._updateFromSnapshot(snapshot_1);
                                if (_this.isVerbose) {
                                    console.debug(_this.debugName + " - fetched " + snapshot_1.docs.length + " documents");
                                }
                            });
                            this._ready(true);
                            return [2 /*return*/, this];
                        case 3:
                            err_1 = _a.sent();
                            console.log(this.debugName + " - fetch failed: " + err_1.message);
                            mobx.runInAction(function () {
                                _this.isLoadingObservable.set(false);
                                _this._updateFromSnapshot(undefined);
                                _this._ready(true);
                            });
                            throw err_1;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        Object.defineProperty(Collection.prototype, "isLoading", {
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
            get: function () {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions, @babel/no-unused-expressions
                this.docsObservable.length;
                return this.isLoadingObservable.get();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "isLoaded", {
            /**
             * True when a query snapshot has been retrieved at least once.
             * This however does not mean that any documents have been retrieved,
             * as the number of returned document may have been 0.
             * Use `hasDocs` to check whether any documents have been retrieved.
             *
             * @type {boolean}
             */
            get: function () {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions, @babel/no-unused-expressions
                this.docsObservable.length;
                return this.isLoadedObservable.get();
            },
            enumerable: false,
            configurable: true
        });
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
        Collection.prototype.ready = function () {
            this.readyPromise = this.readyPromise || Promise.resolve(null);
            return this.readyPromise;
        };
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
        Collection.prototype.add = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var ref, ref2, snapshot;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ref = this.ref;
                            if (!ref) {
                                throw new Error('No valid collection reference');
                            }
                            // REVISIT: can we know to skip this if schemas not in use?
                            // Validate schema using a dummy snapshot
                            this.createDocument(undefined, {
                                context: this.context,
                                snapshot: {
                                    data: function () { return data; },
                                    exists: function () { return true; },
                                    get: function (fieldPath) { return data[fieldPath]; },
                                    id: '',
                                    metadata: undefined,
                                    ref: undefined,
                                },
                            });
                            return [4 /*yield*/, firestore.addDoc(ref, data)];
                        case 1:
                            ref2 = _a.sent();
                            return [4 /*yield*/, firestore.getDoc(ref2)];
                        case 2:
                            snapshot = _a.sent();
                            return [2 /*return*/, this.createDocument(snapshot.ref, {
                                    context: this.context,
                                    snapshot: snapshot,
                                })];
                    }
                });
            });
        };
        /**
         * Deletes all the documents in the collection or query.
         * @ignore
         * TODO - Not implemented yet
         */
        Collection.prototype.deleteAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                var ref;
                return __generator(this, function (_a) {
                    ref = this.ref;
                    if (!ref) {
                        throw new Error('No valid collection reference');
                    }
                    return [2 /*return*/];
                });
            });
        };
        Collection.prototype.toString = function () {
            return this.debugName;
        };
        Object.defineProperty(Collection.prototype, "debugName", {
            /**
             * @private
             */
            get: function () {
                return (this.debugInstanceName || this.constructor.name) + " (" + this.path + ")";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "context", {
            /**
             * @private
             */
            get: function () {
                return this.ctx;
            },
            enumerable: false,
            configurable: true
        });
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
        Collection.prototype.addObserverRef = function () {
            var _this = this;
            if (this.isVerbose) {
                console.debug(this.debugName + " - addRef (" + (this.observedRefCount + 1) + ")");
            }
            var res = ++this.observedRefCount;
            if (res === 1) {
                mobx.runInAction(function () { return _this._updateRealtimeUpdates(); });
            }
            return res;
        };
        /**
         * Called whenever a property of this class becomes un-observed.
         * @private
         */
        Collection.prototype.releaseObserverRef = function () {
            var _this = this;
            if (this.isVerbose) {
                console.debug(this.debugName + " - releaseRef (" + (this.observedRefCount - 1) + ")");
            }
            var res = --this.observedRefCount;
            if (!res) {
                mobx.runInAction(function () { return _this._updateRealtimeUpdates(); });
            }
            return res;
        };
        Collection.prototype._ready = function (complete) {
            var _this = this;
            if (complete) {
                var readyResolve = this.readyResolveFn;
                if (readyResolve) {
                    this.readyResolveFn = undefined;
                    readyResolve();
                }
            }
            else if (!this.readyResolveFn) {
                this.readyPromise = new Promise(function (resolve) {
                    _this.readyResolveFn = resolve;
                });
            }
        };
        Collection.prototype._resolveRef = function (source) {
            if (this.sourceCache === source) {
                return this.sourceCacheRef;
            }
            var ref;
            if (typeof source === 'string') {
                ref = firestore.collection(getFirestore(this), source);
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
        };
        Collection.prototype._resolveQuery = function (collectionRef, query) {
            var ref = query;
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
        };
        /**
         * @private
         */
        Collection.prototype._onSnapshot = function (snapshot) {
            var _this = this;
            // Firestore sometimes returns multiple snapshots initially.
            // The first one containing cached results, followed by a second
            // snapshot which was fetched from the cloud.
            if (this.initialLocalSnapshotDebounceTimer) {
                clearTimeout(this.initialLocalSnapshotDebounceTimer);
                this.initialLocalSnapshotDebounceTimer = undefined;
                if (this.isVerbose) {
                    console.debug(this.debugName + " - cancelling initial debounced snapshot, because a newer snapshot has been received");
                }
            }
            if (this.isMinimizingUpdates) {
                var timeElapsed = Date.now() - this.initialLocalSnapshotStartTime;
                this.initialLocalSnapshotStartTime = 0;
                if (timeElapsed >= 0 && timeElapsed < this.initialLocalSnapshotDetectTime) {
                    if (this.isVerbose) {
                        console.debug(this.debugName + " - local snapshot detected (" + timeElapsed + "ms < " + this.initialLocalSnapshotDetectTime + "ms threshold), debouncing " + this.initialLocalSnapshotDebounceTime + " msec...");
                    }
                    this.initialLocalSnapshotDebounceTimer = setTimeout(function () {
                        _this.initialLocalSnapshotDebounceTimer = undefined;
                        _this._onSnapshot(snapshot);
                    }, this.initialLocalSnapshotDebounceTime);
                    return;
                }
            }
            // Process snapshot
            mobx.runInAction(function () {
                if (_this.isVerbose) {
                    console.debug(_this.debugName + " - onSnapshot");
                }
                _this.isLoadingObservable.set(false);
                _this._updateFromSnapshot(snapshot);
                _this._ready(true);
            });
        };
        /**
         * @private
         */
        Collection.prototype._onSnapshotError = function (error) {
            console.warn(this.debugName + " - onSnapshotError: " + error.message);
        };
        /**
         * @private
         */
        Collection.prototype._updateFromSnapshot = function (snapshot) {
            var _this = this;
            var newDocs = [];
            if (snapshot) {
                snapshot.docs.forEach(function (docSnapshot) {
                    var doc = _this.docLookup[docSnapshot.id];
                    try {
                        if (doc) {
                            doc.updateFromCollectionSnapshot(docSnapshot);
                        }
                        else {
                            doc = _this.createDocument(docSnapshot.ref, {
                                context: _this.context,
                                snapshot: docSnapshot,
                            });
                            _this.docLookup[doc.id] = doc;
                        }
                        doc.addCollectionRef();
                        newDocs.push(doc);
                    }
                    catch (err) {
                        console.error(err.message);
                    }
                });
            }
            this.docsObservable.forEach(function (doc) {
                if (!doc.releaseCollectionRef()) {
                    delete _this.docLookup[doc.id || ''];
                }
            });
            this.hasDocsObservable.set(!!newDocs.length);
            this.isLoadedObservable.set(true);
            if (this.docsObservable.length !== newDocs.length) {
                this.docsObservable.replace(newDocs);
            }
            else {
                for (var i = 0, n = newDocs.length; i < n; i++) {
                    if (newDocs[i] !== this.docsObservable[i]) {
                        this.docsObservable.replace(newDocs);
                        break;
                    }
                }
            }
        };
        /**
         * @private
         */
        Collection.prototype._updateRealtimeUpdates = function (updateSourceRef, updateQueryRef) {
            var _this = this;
            var newActive = false;
            var active = !!this.onSnapshotUnsubscribe;
            switch (this.modeObservable.get()) {
                case exports.Mode.Auto:
                    newActive = !!this.observedRefCount;
                    break;
                case exports.Mode.Off:
                    newActive = false;
                    break;
                case exports.Mode.On:
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
                        console.debug(this.debugName + " - stop (" + this.modeObservable.get() + ":" + this.observedRefCount + ")");
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
                var initialSourceRef_1 = this.refObservable.get();
                var initialQueryRef_1 = this.queryRefObservable.get();
                this.refDisposerFn = mobx.reaction(function () {
                    var sourceRef = _this._resolveRef(_this.sourceInput);
                    var queryRef2 = _this._resolveQuery(sourceRef, _this.queryInput);
                    if (initialSourceRef_1) {
                        sourceRef = initialSourceRef_1;
                        queryRef2 = initialQueryRef_1;
                        initialSourceRef_1 = undefined;
                        initialQueryRef_1 = undefined;
                    }
                    return {
                        queryRef2: queryRef2,
                        sourceRef: sourceRef,
                    };
                }, function (_a) {
                    var sourceRef = _a.sourceRef, queryRef2 = _a.queryRef2;
                    mobx.runInAction(function () {
                        if (_this.refObservable.get() !== sourceRef ||
                            _this.queryRefObservable.get() !== queryRef2) {
                            _this.refObservable.set(sourceRef);
                            _this.queryRefObservable.set(queryRef2);
                            _this._updateRealtimeUpdates();
                        }
                    });
                });
            }
            // Resolve ref and check whether it has changed
            var queryRef = this.queryRefObservable.get();
            var ref = queryRef !== undefined ? queryRef : this.refObservable.get();
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
                        docChanges: function (options) {
                            return [];
                        },
                        docs: [],
                        empty: true,
                        forEach: function () { return true; },
                        metadata: undefined,
                        query: queryRef,
                        size: 0,
                    });
                }
                return;
            }
            // Start listener
            if (this.isVerbose) {
                console.debug(this.debugName + " - " + (active ? 're-' : '') + "start (" + this.modeObservable.get() + ":" + this.observedRefCount + ")");
            }
            this._ready(false);
            this.isLoadingObservable.set(true);
            this.initialLocalSnapshotStartTime = Date.now();
            this.onSnapshotUnsubscribe = firestore.onSnapshot(ref, {
                next: function (snapshot) { return _this._onSnapshot(snapshot); },
                error: function (err) { return _this._onSnapshotError(err); },
            });
        };
        return Collection;
    }());

    var isEqual$2 = require('lodash.isequal');
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
    var AggregateCollection = /** @class */ (function () {
        function AggregateCollection(source, options) {
            var _this = this;
            this.observedRefCount = 0;
            /**
             * @private
             */
            this._onCreateDocument = function (source, options) {
                if (!source) {
                    return _this.createDocument(source, options);
                }
                // @ts-ignore
                var doc = source.id ? _this.documentRecycleMap[source.id] : null;
                return doc || _this.createDocument(source, options);
            };
            mobx.makeObservable(this, {
                docs: mobx.computed,
            });
            this.collectionSource = source;
            if (options.createDocument) {
                this.createDocument = options.createDocument;
            }
            else {
                this.createDocument = function (docSource, docOptions) {
                    return new Document(docSource, docOptions);
                };
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
        Object.defineProperty(AggregateCollection.prototype, "docs", {
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
            get: function () {
                var docs = [];
                // Aggregrate all docs from the queries
                var hasAllData = true;
                this.collections.forEach(function (col) {
                    if (col.isLoading) {
                        hasAllData = false;
                    }
                    col.docs.forEach(function (doc) { return docs.push(doc); });
                });
                // If new queries have been added but have not yet
                // completed loading, use the previous queries instead
                // (until) all data has loaded
                if (!hasAllData && this.prevCollections.length) {
                    // console.log('usingPrevQueries');
                    docs = [];
                    this.prevCollections.forEach(function (col) {
                        col.docs.forEach(function (doc) { return docs.push(doc); });
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
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AggregateCollection.prototype, "hasDocs", {
            /**
             * True whenever any documents have been fetched.
             *
             * @type {boolean}
             */
            get: function () {
                return this.docs.length > 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AggregateCollection.prototype, "cols", {
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
            get: function () {
                return this.collections;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AggregateCollection.prototype, "queries", {
            /**
             * Queries function.
             *
             * @type {Function}
             */
            get: function () {
                return this.queriesFn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AggregateCollection.prototype, "isLoading", {
            /**
             * True when new data is being loaded.
             *
             * @type {boolean}
             */
            get: function () {
                return this.collections.reduce(function (acc, col) { return acc || col.isLoading; }, false);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AggregateCollection.prototype, "isLoaded", {
            /**
             * True when data for all underlying collections has been loaded.
             *
             * @type {boolean}
             */
            get: function () {
                return this.collections.reduce(function (acc, col) { return (acc ? col.isLoaded : false); }, true);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AggregateCollection.prototype, "debugName", {
            /**
             * @private
             */
            get: function () {
                return "" + (this.debugInstanceName || this.constructor.name);
            },
            enumerable: false,
            configurable: true
        });
        AggregateCollection.prototype.toString = function () {
            return this.debugName;
        };
        Object.defineProperty(AggregateCollection.prototype, "context", {
            /**
             * @private
             */
            get: function () {
                return this.ctx;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Called whenever a property of this class becomes observed.
         * @private
         */
        AggregateCollection.prototype.addObserverRef = function () {
            var _this = this;
            var res = ++this.observedRefCount;
            if (res === 1) {
                this.disposer = mobx.autorun(function () {
                    var queries = _this.queriesFn();
                    mobx.runInAction(function () { return _this._updateQueries(queries); });
                });
            }
            return res;
        };
        /**
         * Called whenever a property of this class becomes un-observed.
         * @private
         */
        AggregateCollection.prototype.releaseObserverRef = function () {
            var res = --this.observedRefCount;
            if (res <= 0) {
                if (this.disposer) {
                    this.disposer();
                    this.disposer = undefined;
                }
            }
            return res;
        };
        /**
         * @private
         */
        AggregateCollection.prototype._updateQueries = function (queries) {
            var _this = this;
            if (!queries) {
                return;
            }
            if (this.debug) {
                console.debug(this.debugName, 'updateQueries: ', queries);
            }
            // Copy all current documents into the document recyle map
            this.documentRecycleMap = {};
            Object.values(this.collectionRecycleMap).forEach(function (query) {
                query.docs.forEach(function (doc) {
                    _this.documentRecycleMap[doc.id] = doc;
                });
            });
            // console.log(Object.keys(this._documentRecycleMap));
            var cols = queries.map(function (query) {
                var col = _this.collectionRecycleMap[query.key];
                if (!col) {
                    col = new Collection(_this.collectionSource, {
                        createDocument: _this._onCreateDocument,
                        debug: _this.debug,
                        debugName: _this.debugName + '.col: ' + query.key,
                        query: function (ref) { return (ref ? query.query(ref) : ref); },
                    });
                }
                return col;
            });
            // Update the query recycle map
            this.collectionRecycleMap = {};
            cols.forEach(function (col, index) {
                var query = queries[index];
                _this.collectionRecycleMap[query.key] = col;
            });
            // Update the queries
            if (!isEqual$2(cols, this.collections.slice(0))) {
                this.collections.replace(cols);
            }
        };
        return AggregateCollection;
    }());

    // Taken from https://github.com/firebase/geofire-js/blob/master/src/utils.ts
    // Default geohash length
    var GEOHASH_PRECISION = 10;
    // Characters used in location geohashes
    var BASE32 = '0123456789bcdefghjkmnpqrstuvwxyz';
    // The meridional circumference of the earth in meters
    var EARTH_MERI_CIRCUMFERENCE = 40007860;
    // Length of a degree latitude at the equator
    var METERS_PER_DEGREE_LATITUDE = 110574;
    // Number of bits per geohash character
    var BITS_PER_CHAR = 5;
    // Maximum length of a geohash in bits
    var MAXIMUM_BITS_PRECISION = 22 * BITS_PER_CHAR;
    // Equatorial radius of the earth in meters
    var EARTH_EQ_RADIUS = 6378137.0;
    // The following value assumes a polar radius of
    // const EARTH_POL_RADIUS = 6356752.3;
    // The formulate to calculate E2 is
    // E2 == (EARTH_EQ_RADIUS^2-EARTH_POL_RADIUS^2)/(EARTH_EQ_RADIUS^2)
    // The exact value is used here to avoid rounding errors
    var E2 = 0.00669447819799;
    // Cutoff for rounding errors on double calculations
    var EPSILON = 1e-12;
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
            throw new Error("Invalid location \"" + location + "\": " + err.message);
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
            throw new Error("Invalid region \"" + region + "\": " + err.message);
        }
    }
    /**
     * Validates the inputted geohash and throws an error if it is invalid.
     * @private
     * @param {string} geohash The geohash to be validated.
     */
    function validateGeohash(geohash) {
        var e_1, _a;
        var error;
        if (typeof geohash !== 'string') {
            error = 'geohash must be a string';
        }
        else if (geohash.length === 0) {
            error = 'geohash cannot be the empty string';
        }
        else {
            try {
                for (var geohash_1 = __values(geohash), geohash_1_1 = geohash_1.next(); !geohash_1_1.done; geohash_1_1 = geohash_1.next()) {
                    var letter = geohash_1_1.value;
                    if (BASE32.indexOf(letter) === -1) {
                        error = "geohash cannot contain '" + letter + "'";
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (geohash_1_1 && !geohash_1_1.done && (_a = geohash_1.return)) _a.call(geohash_1);
                }
                finally { if (e_1) throw e_1.error; }
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
        var north = region.latitude - region.latitudeDelta * 0.5;
        var south = region.latitude + region.latitudeDelta * 0.5;
        var east = wrapLongitude(region.longitude + region.longitudeDelta * 0.5);
        var west = wrapLongitude(region.longitude - region.longitudeDelta * 0.5);
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
    function encodeGeohash(location, precision) {
        if (precision === void 0) { precision = GEOHASH_PRECISION; }
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
        var latitudeRange = {
            max: 90,
            min: -90,
        };
        var longitudeRange = {
            max: 180,
            min: -180,
        };
        var hash = '';
        var hashVal = 0;
        var bits = 0;
        var even = 1;
        while (hash.length < precision) {
            var val = even ? location.longitude : location.latitude;
            var range = even ? longitudeRange : latitudeRange;
            var mid = (range.min + range.max) / 2;
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
        var evenBit = true;
        var latMin = -90;
        var latMax = 90;
        var lonMin = -180;
        var lonMax = 180;
        for (var i = 0; i < geohash.length; i++) {
            var chr = geohash.charAt(i);
            var idx = BASE32.indexOf(chr);
            if (idx < 0) {
                throw new Error('Invalid geohash');
            }
            for (var n = 4; n >= 0; n--) {
                var bitN = (idx >> n) & 1;
                if (evenBit) {
                    // longitude
                    var lonMid = (lonMin + lonMax) / 2;
                    if (bitN === 1) {
                        lonMin = lonMid;
                    }
                    else {
                        lonMax = lonMid;
                    }
                }
                else {
                    // latitude
                    var latMid = (latMin + latMax) / 2;
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
        var radians = degreesToRadians(latitude);
        var num = (Math.cos(radians) * EARTH_EQ_RADIUS * Math.PI) / 180;
        var denom = 1 / Math.sqrt(1 - E2 * Math.sin(radians) * Math.sin(radians));
        var deltaDeg = num * denom;
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
        var degs = metersToLongitudeDegrees(resolution, latitude);
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
        var adjusted = longitude + 180;
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
        var latDeltaDegrees = size / METERS_PER_DEGREE_LATITUDE;
        var latitudeNorth = Math.min(90, coordinate.latitude + latDeltaDegrees);
        var latitudeSouth = Math.max(-90, coordinate.latitude - latDeltaDegrees);
        var bitsLat = Math.floor(latitudeBitsForResolution(size)) * 2;
        var bitsLongNorth = Math.floor(longitudeBitsForResolution(size, latitudeNorth)) * 2 - 1;
        var bitsLongSouth = Math.floor(longitudeBitsForResolution(size, latitudeSouth)) * 2 - 1;
        return Math.min(bitsLat, bitsLongNorth, bitsLongSouth, MAXIMUM_BITS_PRECISION);
    }
    function boundingBoxBitsForRegion(region) {
        var _a = geoRegionToPoints(region), northEast = _a.northEast, southEast = _a.southEast, northWest = _a.northWest, southWest = _a.southWest;
        var bitsLat = Math.floor(latitudeBitsForResolution(calculateGeoDistance(northEast, southEast) * 0.5)) * 2;
        var bitsLongNorth = Math.floor(longitudeBitsForResolution(calculateGeoDistance(northEast, northWest) * 0.5, northWest.latitude)) *
            2 -
            1;
        var bitsLongSouth = Math.floor(longitudeBitsForResolution(calculateGeoDistance(southEast, southWest) * 0.5, southWest.latitude)) *
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
        var latDegrees = radius / METERS_PER_DEGREE_LATITUDE;
        var latitudeNorth = Math.min(90, center.latitude + latDegrees);
        var latitudeSouth = Math.max(-90, center.latitude - latDegrees);
        var longDegsNorth = metersToLongitudeDegrees(radius, latitudeNorth);
        var longDegsSouth = metersToLongitudeDegrees(radius, latitudeSouth);
        var longDegs = Math.max(longDegsNorth, longDegsSouth);
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
        var _a = geoRegionToPoints(region), northEast = _a.northEast, northWest = _a.northWest, southWest = _a.southWest;
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
        var precision = Math.ceil(bits / BITS_PER_CHAR);
        if (geohash1.length < precision) {
            return [geohash1, geohash1 + '~'];
        }
        var geohash = geohash1.substring(0, precision);
        var base = geohash.substring(0, geohash.length - 1);
        var lastValue = BASE32.indexOf(geohash.charAt(geohash.length - 1));
        var significantBits = bits - base.length * BITS_PER_CHAR;
        var unusedBits = BITS_PER_CHAR - significantBits;
        // delete unused bits
        var startValue = (lastValue >> unusedBits) << unusedBits;
        var endValue = startValue + (1 << unusedBits);
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
        var bits = Math.max(1, boundingBoxBits(center, radius));
        var precision = Math.ceil(bits / BITS_PER_CHAR);
        var coordinates = boundingBoxCoordinates(center, radius);
        var queries = coordinates.map(function (coordinate) {
            return geohashQuery(encodeGeohash(toGeoPoint(coordinate), precision), bits);
        });
        // remove duplicates
        return queries.filter(function (query, index) {
            return !queries.some(function (other, otherIndex) {
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
        var bits = Math.max(1, boundingBoxBitsForRegion(region));
        var precision = Math.ceil(bits / BITS_PER_CHAR);
        var coordinates = boundingBoxCoordinatesForRegion(region);
        var queries = coordinates.map(function (coordinate) {
            var geohash = encodeGeohash(toGeoPoint(coordinate), precision);
            var query = geohashQuery(geohash, bits);
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
        return queries.filter(function (query, index) {
            return !queries.some(function (other, otherIndex) {
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
        var res = [geohash1];
        var hash = geohash1;
        while (hash < geohash2) {
            for (var i = geohash1.length - 1; i >= 0; i--) {
                var idx = BASE32.indexOf(hash.charAt(i));
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
        var set = new Set();
        geohashes.forEach(function (a) { return flattenGeohashRange(a[0], a[1]).forEach(function (geohash) { return set.add(geohash); }); });
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
        var radius = 6371; // Earth's radius in kilometers
        var latDelta = degreesToRadians(location2.latitude - location1.latitude);
        var lonDelta = degreesToRadians(location2.longitude - location1.longitude);
        var a = Math.sin(latDelta / 2) * Math.sin(latDelta / 2) +
            Math.cos(degreesToRadians(location1.latitude)) *
                Math.cos(degreesToRadians(location2.latitude)) *
                Math.sin(lonDelta / 2) *
                Math.sin(lonDelta / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
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
    var GeoQuery = /** @class */ (function (_super) {
        __extends(GeoQuery, _super);
        function GeoQuery(source, options) {
            var _this = this;
            var _a = options || {}, region = _a.region, _b = _a.fieldPath, fieldPath = _b === void 0 ? 'geohash' : _b, filterBy = _a.filterBy, otherOptions = __rest(_a, ["region", "fieldPath", "filterBy"]);
            var regionObservable = mobx.observable.box(region);
            _this = _super.call(this, source, __assign({ filterBy: filterBy
                    ? function (doc) {
                        var regionVal = regionObservable.get();
                        regionVal = typeof regionVal === 'function' ? regionVal() : regionVal;
                        return filterBy(doc, regionVal);
                    }
                    : undefined, queries: function () {
                    var regionVal = regionObservable.get();
                    regionVal = typeof regionVal === 'function' ? regionVal() : regionVal;
                    var geohashes = regionVal ? getGeohashesForRegion(regionVal) : undefined;
                    if (!geohashes) {
                        return null;
                    }
                    return geohashes.map(function (geohash) { return ({
                        geohash: geohash,
                        key: geohash[0] + "-" + geohash[1],
                        query: function (ref) {
                            return firestore.query(ref, firestore.where(fieldPath, '>=', geohash[0]), firestore.where(fieldPath, '<', geohash[1]));
                        },
                    }); });
                } }, otherOptions)) || this;
            _this.regionObservable = regionObservable;
            mobx.makeObservable(_this, {
                geohashes: mobx.computed,
            });
            return _this;
        }
        Object.defineProperty(GeoQuery.prototype, "region", {
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
            get: function () {
                return this.regionObservable.get();
            },
            set: function (val) {
                var _this = this;
                mobx.runInAction(function () { return _this.regionObservable.set(val); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GeoQuery.prototype, "geohashes", {
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
            get: function () {
                var queries = this.queries();
                return queries ? queries.map(function (query) { return query.geohash; }) : [];
            },
            enumerable: false,
            configurable: true
        });
        return GeoQuery;
    }(AggregateCollection));

    exports.AggregateCollection = AggregateCollection;
    exports.Collection = Collection;
    exports.Document = Document;
    exports.GeoQuery = GeoQuery;
    exports.calculateGeoDistance = calculateGeoDistance;
    exports.decodeGeohash = decodeGeohash;
    exports.encodeGeohash = encodeGeohash;
    exports.flattenGeohashRange = flattenGeohashRange;
    exports.flattenGeohashes = flattenGeohashes;
    exports.geoRegionToPoints = geoRegionToPoints;
    exports.getFirebaseApp = getFirebaseApp;
    exports.getFirestore = getFirestore;
    exports.getGeohashesForRadius = getGeohashesForRadius;
    exports.getGeohashesForRegion = getGeohashesForRegion;
    exports.initFirestorter = initFirestorter;
    exports.insideGeoRegion = insideGeoRegion;
    exports.isTimestamp = isTimestamp;
    exports.makeFirestorterContext = makeFirestorterContext;
    exports.mergeUpdateData = mergeUpdateData;
    exports.metersToLatitudeDegrees = metersToLatitudeDegrees;
    exports.metersToLongitudeDegrees = metersToLongitudeDegrees;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
