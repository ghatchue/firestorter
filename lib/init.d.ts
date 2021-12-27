import { FirebaseApp } from 'firebase/app';
import { Firestore } from 'firebase/firestore';
export declare const ModuleName = "firestorter";
export interface IContext {
    readonly app: FirebaseApp;
    readonly firestore: Firestore;
}
export interface IHasContext {
    readonly context?: IContext;
}
export declare type FirestorterConfig = {
    app?: string | FirebaseApp;
    firestore?: Firestore;
};
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
declare function initFirestorter(config?: FirestorterConfig): void;
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
export declare function makeFirestorterContext(config?: FirestorterConfig): IContext;
declare function getFirebaseApp(obj?: IHasContext): FirebaseApp;
declare function getFirestore(obj?: IHasContext): Firestore;
export { initFirestorter, getFirestore, getFirebaseApp };
