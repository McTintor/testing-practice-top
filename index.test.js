import { capitalize } from "."
import { reverseString } from "."
import { calculator } from "."
import { caesarCipher } from "."
import { analyzeArray } from "."

test('capitalizes the first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('returns an empty string if the input is not a string', () => {
  expect(capitalize(123)).toBe('');
  expect(capitalize(null)).toBe('');
  expect(capitalize(undefined)).toBe('');
});

test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
  
  test('returns an empty string if the input is not a string', () => {
    expect(reverseString(123)).toBe('');
    expect(reverseString(null)).toBe('');
    expect(reverseString(undefined)).toBe('');
  });

  test('adds two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  
  test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });
  
  test('multiplies two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
  
  test('divides two numbers', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test('shifts characters correctly', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
  
  test('preserves case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });
  
  test('ignores punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });

  test('analyzes an array of numbers', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });
  
  test('returns an empty object if the input is not an array or is empty', () => {
    expect(analyzeArray([])).toEqual({});
    expect(analyzeArray(null)).toEqual({});
    expect(analyzeArray(undefined)).toEqual({});
  });