import { camelCaseCount } from './camel-case-count';

describe('CamelCase Count', () => {
  test('single word with 2 string', () => {
    expect(camelCaseCount('to')).toBe(1);
  });

  test('saveChangesInTheEditor = 5', () => {
    expect(camelCaseCount('saveChangesInTheEditor')).toBe(5);
  });

  test('oneTwoThree = 3', () => {
    expect(camelCaseCount('oneTwoThree')).toBe(3);
  });

  test('oneTwoThreeFour = 4', () => {
    expect(camelCaseCount('oneTwoThreeFour')).toBe(4);
  });

  test('Empty input', () => {
    expect(camelCaseCount()).toBe('invalid input');
  });

  test('Number input example 1234', () => {
    expect(camelCaseCount(1234)).toBe('invalid input');
  });

  test('Number input as string example "1234"', () => {
    expect(camelCaseCount('1234')).toBe('invalid input');
  });

  xtest('With Space example: "hello World"', () => {
    expect(camelCaseCount('hello World')).toBe('invalid input');
  });

  xtest('Start with capital example: "Hello World"', () => {
    expect(camelCaseCount('   Hello World')).toBe('invalid input');
  });

  xtest('Start with space example: "   Hello World"', () => {
    expect(camelCaseCount('   Hello World')).toBe('invalid input');
  });
});
