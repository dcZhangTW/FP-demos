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
// export function findFirst<A>(as: A[], p: A => boolean): number {

// }