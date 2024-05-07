// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('tests if phone numbers are in correct format', () => {
  expect(isPhoneNumber('(619) 410-3321')).toBe(true);
  expect(isPhoneNumber('999 888-7777')).toBe(true);
  expect(isPhoneNumber('(AAA) AAA-3321')).toBe(false);
  expect(isPhoneNumber('(999) 410-$$$$')).toBe(false);
});

test('tests if email addresses are in correct format', () => {
  expect(isEmail('example@example.com')).toBe(true);
  expect(isEmail('123@example.com')).toBe(true);
  expect(isEmail('example.com')).toBe(false);
  expect(isEmail('example@@.example.com')).toBe(false);
});

test('tests if password is sufficiently strong', () => {
  expect(isStrongPassword('HelloWorld')).toBe(true);
  expect(isStrongPassword('Thousand120')).toBe(true);
  expect(isStrongPassword('Wow')).toBe(false);
  expect(isStrongPassword('Wow%')).toBe(false);
});

test('tests if dates are in correct format', () => {
  expect(isDate('05/04/2024')).toBe(true);
  expect(isDate('1/1/1970')).toBe(true);
  expect(isDate('01/111/1970')).toBe(false);
  expect(isDate('01/01/197000')).toBe(false);
});

test('test if string is valid color syntax for HTML & CSS', () => {
  expect(isHexColor('#000')).toBe(true);
  expect(isHexColor('#000FFF')).toBe(true);
  expect(isHexColor('#000$%#')).toBe(false);
  expect(isHexColor('#!@#')).toBe(false);
});