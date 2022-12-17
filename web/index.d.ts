import type { Firestore } from 'firebase/firestore';
import type { IContext } from './IContext';
export declare type FirestorterWebConfig = {
    firestore: Firestore;
};
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
export default function makeWebContext(config: FirestorterWebConfig): IContext;
