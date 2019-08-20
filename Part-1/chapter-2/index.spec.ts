import { factorial, fib } from './index';

describe('All tests for chapter 2', () => {
  it('should return factorial for input number n', () => {
    expect(factorial(1)).toEqual(1);
    expect(factorial(5)).toEqual(120);
  });

  it('should return nth Fibonacci number', () => {
    expect(fib(1)).toBe(0);
    expect(fib(2)).toBe(1);
    expect(fib(6)).toBe(5);
  })
});
