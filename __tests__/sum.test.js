// sum.test.js
import { sum } from '../code-to-unit-test/sum';

test('adds 1 + 2 to equal 3', () => {
<<<<<<< HEAD
  expect(1 + 2).toBe(3);
=======
  expect(1 + 2).toBe(4);
>>>>>>> ad043e6d9c7758c153bc5517f08d646189c1c7f6
});

test('adds 1 + 2 to equal 3', () => {
  expect((sum(1, 2))).toBe(3);
});
