import { doc } from 'firebase/firestore';

import { Document, getFirestore } from './init';

test('no ref', () => {
  const doc = new Document();
  expect(doc.ref).toBeUndefined();
});

test('get ref', () => {
  const ref = doc(getFirestore(), 'todos/todo');
  const d = new Document(ref);
  expect(d.ref).toBe(ref);
});

test('set ref', () => {
  const ref = doc(getFirestore(), 'todos/todo');
  const d = new Document();
  d.ref = ref;
  expect(d.ref).toBe(ref);
});

test('clear ref', () => {
  const ref = doc(getFirestore(), 'todos/todo');
  const d = new Document(ref);
  d.ref = undefined;
  expect(d.ref).toBeUndefined();
});

test('replace ref', () => {
  const ref = doc(getFirestore(), 'todos/todo');
  const ref2 = doc(getFirestore(), 'todos/todo2');
  const d = new Document(ref);
  d.ref = ref2;
  expect(d.ref).toBe(ref2);
});
