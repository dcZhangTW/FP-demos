// 最基础的不可变数据结构：单链表
interface List<T> {
  readonly isNil: boolean;
  readonly head?: T;
  readonly tail?: List<T>;
}

class Cons<T> implements List<T> {
  isNil: boolean = false;
  head: T;
  tail: List<T>;

  constructor(head: T, tail: List<T>) {
    this.head = head;
    this.tail = tail;
  }
}

const nil: List<never> = {
  isNil: true,
};

function equal<T>(list1: List<T>, list2: List<T>): boolean {
  if (list1.isNil && list2.isNil) {
    return true;
  }
  if (list1.isNil || list2.isNil) { // ？？？
    return false;
  }
  return list1.head === list2.head && equal(list1.tail, list2.tail);
}

function asList<T>(...elems: T[]): List<T> {
  return elems.length === 0 ? nil : new Cons(elems[0], asList(...elems.slice(1)));
}

export {
  List,
  Cons,
  nil,
  equal,
  asList,
};