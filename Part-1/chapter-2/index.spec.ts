import { factorial, fib, findFirst, findFirstPF, isSorted, curry, uncurry, compose } from './index';

describe('All tests for chapter 2', () => {
  it('should return factorial for input number n', () => {
    expect(factorial(1)).toEqual(1);
    expect(factorial(5)).toEqual(120);
  });

  it('should return nth Fibonacci number', () => {
    expect(fib(1)).toBe(0);
    expect(fib(2)).toBe(1);
    expect(fib(6)).toBe(5);
  });

  it('should find first string in string array', () => {
    const strArr = ['one', 'two', 'three', 'two'];
    expect(findFirst(strArr, 'one')).toBe(0);
    expect(findFirst(strArr, 'two')).toBe(1);
  });

  it('should find first item for any array', () => {
    const strArr = ['one', 'two', 'three', 'two'];
    const numArr = [1, 2, 3, 2];
    expect(findFirstPF(strArr, a => a === 'two')).toBe(1);
    expect(findFirstPF(numArr, a => a === 2)).toBe(1);
  });

  it('should check is sorted by sortFun for any array', () => {
    const sortNum = [1, 2, 3, 4, 5];
    const nonSortNum = [1, 3, 4, 2, 5];
    const sortFun = (a1: number, a2: number) => a1 < a2;
    expect(isSorted(sortNum, sortFun)).toBeTruthy();
    expect(isSorted(nonSortNum, sortFun)).toBeFalsy();
  });

  it('should curry & uncurry success', () => {
    const add = (a: number, b: number) => a + b;
    const addPlus = (a: number) => (b: number) => a + b;
    expect(curry(add)(1)(2)).toEqual(add(1, 2));
    expect(uncurry(addPlus)(1, 2)).toEqual(addPlus(1)(2));
  });

  it('should compose two function', () => {
    const toNumber = (a: string) => +a;
    expect(compose(toNumber, factorial)('5')).toEqual(120);
  });
});
