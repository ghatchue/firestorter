import { deleteApp, initializeApp } from 'firebase/app';
import { autorun, reaction, observable, configure } from 'mobx';

import {
  initFirestorter,
  getFirestore,
  getFirebaseApp,
  Collection,
  Document,
  isTimestamp,
  mergeUpdateData,
  Mode,
} from '../src';

const firebaseConfig = require('./firebaseConfig.json');

let firebaseApp;

beforeAll(() => {
  jest.setTimeout(10000);

  // Initialize firebase
  firebaseApp = initializeApp(firebaseConfig);

  // Configure mobx strict-mode
  configure({ enforceActions: 'always', computedRequiresReaction: true });

  // Initialize firestorter
  initFirestorter({ app: firebaseApp });

  // Verify that firestorter is initialized correctly
  if (!getFirebaseApp()) throw new Error('getFirebaseApp');
  if (!getFirestore()) throw new Error('getFirestore');
});

afterAll(() => {
  deleteApp(firebaseApp);
});

export {
  initFirestorter,
  getFirestore,
  Collection,
  Document,
  isTimestamp,
  mergeUpdateData,
  autorun,
  reaction,
  observable,
  Mode,
};
