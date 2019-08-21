// 阶乘方法，递归函数
export function factorial(num: number): number {

  function go(n: number, acc: number): number {
    if (n <= 0) return acc;
    else return go(n - 1, n * acc);
  }

  return go(num, 1);
}

export function fib(num: number): number {

  function go(n: number) {
    if (n <= 1) return 0;
    else if (n === 2) return 1;
    else return go(n - 1) + go(n - 2);
  }

  return go(num);
}

// 尾递归

export function abs(num: number): number {
  if (num < 0) return -num;
  else return num;
}

// 两个 formatXXX 函数的共同之处
const myModule = {
  formatAbs(x: number): string {
    return `The absolute value of ${x} is ${abs(x)}.`;
  },

  formatFactorial(x: number): string {
    return `The factorial of ${x} is ${factorial(x)}`;
  },

  // 一个经过抽象的典型的高阶函数
  formatResult(name: string, x: number, f: (num: number) => number): string {
    return `The ${name} of ${x} is ${f(x)}`;
  },

  display() {
    console.log(this.formatAbs(-42));
    console.log(this.formatFactorial(7));
  }
}

// 多态高阶函数：基于类型进行进一步抽象
export function findFirst(ss: string[], key: string): number {

  function loop(x: number): number {
    if (x >= ss.length) return -1;
    else if (ss[x] === key) return x;
    else return loop(x + 1);
  }

  return loop(0);
}

// 对类型进行抽象，不仅仅局限于寻在 string 列表中的某个值如下伪代码
export function findFirstPF<A>(as: A[], p: (a: A) => boolean): number {

  function loop(x: number): number {
    if (x >= as.length) return -1;
    else if (p(as[x])) return x;
    else return loop(x + 1);
  }

  return loop(0);
}
// 通过添加类型变量 A 对类型进行抽象

// 练习：实现方法 isSorted 判断 Array[A] 是否按给定排序方法排序
export function isSorted<A>(as: A[], p: (a1: A, a2: A) => boolean): boolean {

  function loop(x: number): boolean {
    if (x === as.length - 1) return true;
    else {
      if (p(as[x], as[x + 1])) return loop(x + 1);
      else return false;
    }
  }

  return loop(0);
}

// 基于行为的进一步抽象，返回另一个函数
export function partial1<A, B, C>(a: A, f: (a: A, b: B) => C): (b: B) => C {
  return (b: B) => f(a, b);
}
// 练习：curry 方法，将一个接收两个参数的函数，转化为接收一个参数并返回一个接收一个参数的函数的函数
export function curry<A, B, C>(f: (a: A, b: B) => C): (a: A) => (b: B) => C {
  return (a: A) => (b: B) => f(a, b);
}
// 练习：uncurry
export function uncurry<A, B, C>(f: (a: A) => (b: B) => C): (a: A, b: B) => C {
  return (a: A, b: B) => f(a)(b);
}
// 练习：compose 方法，将两个方法结合为一个方法
export function compose<A, B, C>(f1: (a: A) => B, f2: (b: B) => C): (a: A) => C {
  return (a: A) => f2(f1(a));
}