import { collection } from 'firebase/firestore';

import { Collection, getFirestore } from './init';

test('no args', () => {
  expect(new Collection()).toBeDefined();
});

test('invalid ref (empty)', () => {
  expect(() => new Collection(collection(getFirestore(), ''))).toThrow();
});

test('invalid ref (document path)', () => {
  expect(() => new Collection(collection(getFirestore(), 'albums/album'))).toThrow();
});

test('valid ref', () => {
  expect(new Collection(collection(getFirestore(), 'albums'))).toBeDefined();
});

test('invalid path (empty string)', () => {
  expect(() => new Collection('')).toThrow();
});

test('invalid path (document path)', () => {
  expect(() => new Collection('albums/gunsandroses')).toThrow();
});

test('valid path', () => {
  expect(new Collection('artists/gunsandroses/albums')).toBeDefined();
});
