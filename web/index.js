"use strict";
exports.__esModule = true;
var firestore_1 = require("firebase/firestore");
/**
 * Creates a firestorter web context.
 *
 * @param {Object} config - Configuration options
 * @param {Firestore} config.firestore - Firestore instance
 *
 * @example
 * import { initializeApp } from 'firebase/app';
 * import { getFirestore } from 'firebase/firestore';
 * import { Collection, Document } from 'firestorter'
 * import makeWebContext from 'firestorter/web'
 *
 * // Initialize firebase app
 * const app = initializeApp({...});
 * const firestore = getFirestore(app);
 *
 * // Initialize global `firestorter` context
 * initFirestorter(makeWebContext({ firestore }));
 *
 * // Create collection or document
 * const albums = new Collection('artists/Metallica/albums');
 * ...
 * const album = new Document('artists/Metallica/albums/BlackAlbum');
 * ...
 *
 * // Or create a custom context to connect to another Firebase app
 * const app2 = initializeApp({...});
 * const firestore2 = getFirestore(app2);
 * const app2Context = makeWebContext({ firestore: firestore2 });
 *
 * // Create collection or document
 * const albums2 = new Collection('artists/Metallica/albums', {context: app2Context});
 * ...
 * const album2 = new Document('artists/Metallica/albums/BlackAlbum', {context: app2Context});
 * ...
 */
function makeWebContext(config) {
    var firestore = config.firestore;
    if (!firestore)
        throw new Error('Missing argument `firestore`');
    return {
        collection: function (path) { return (0, firestore_1.collection)(firestore, path); },
        doc: function (path) { return (0, firestore_1.doc)(firestore, path); },
        getDocs: firestore_1.getDocs,
        where: firestore_1.where,
        query: firestore_1.query,
        addDoc: firestore_1.addDoc,
        getDoc: firestore_1.getDoc,
        setDoc: firestore_1.setDoc,
        updateDoc: firestore_1.updateDoc,
        deleteDoc: firestore_1.deleteDoc,
        onSnapshot: firestore_1.onSnapshot,
        deleteField: firestore_1.deleteField,
        serverTimestamp: firestore_1.serverTimestamp
    };
}
exports["default"] = makeWebContext;
