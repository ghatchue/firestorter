import { collection } from 'firebase/firestore';

import { Collection, getFirestore } from './init';

test('no ref', () => {
  const col = new Collection();
  expect(col.ref).toBeUndefined();
});

test('get ref', () => {
  const ref = collection(getFirestore(), 'todos');
  const col = new Collection(ref);
  expect(col.ref).toBe(ref);
});

test('set ref', () => {
  const ref = collection(getFirestore(), 'todos');
  const col = new Collection();
  col.ref = ref;
  expect(col.ref).toBe(ref);
});

test('clear ref', () => {
  const ref = collection(getFirestore(), 'todos/todo/sup');
  const col = new Collection(ref);
  col.ref = undefined;
  expect(col.ref).toBeUndefined();
});

test('replace ref', () => {
  const ref = collection(getFirestore(), 'todos');
  const ref2 = collection(getFirestore(), 'todos2');
  const col = new Collection(ref);
  col.ref = ref2;
  expect(col.ref).toBe(ref2);
});
