import { List, asList, nil, Cons } from './index';
// 注意，所有的方法，都必须是纯函数，即不可修改参数数据

// 返回移除第一个元素的List tail
export function tail<T>(l: List<T>): List<T> {
  if (l.isNil) return nil;
  else return l.tail;
}

// 返回替换第一个元素的List setHead
export function setHead<T>(l: List<T>, head: T): List<T> {
  if (l.isNil) return nil;
  else return new Cons(head, l.tail);
}

// 返回移除前n个元素的List drop，执行效率 O(n)
export function drop<T>(l: List<T>, n: number): List<T> {

  function go(l: List<T>, x: number): List<T> {
    if (l.isNil) return nil;
    else if (x < n) return go(l.tail, x + 1);
    else return l.tail;
  }

  return go(l, 1);
}

// 返回移除符合条件的第一个元素的List dropWhile，执行效率同上
export function dropWhile<T>(l: List<T>, f: (a: T) => Boolean): List<T> {

  function go(l: List<T>): List<T> {
    if (l.isNil) return nil;
    else if (f(l.head)) return l.tail;
    else return new Cons(l.head, go(l.tail));
  }

  return go(l);
}

// 返回移除最后一个元素的List init，这个函数的执行效率如何？
export function init<T>(l: List<T>): List<T> {

  function go(l: List<T>): List<T> {
    if (l.isNil) return nil;
    else if (l.tail.isNil) return nil;
    else return new Cons(l.head, go(l.tail));
  }

  return go(l);
}