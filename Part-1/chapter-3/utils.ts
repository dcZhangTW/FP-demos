import { List, asList, nil } from './index';
// 注意，所有的方法，都必须是纯函数，即不可修改参数数据

// 返回移除第一个元素的List tail
export function tail<T>(l: List<T>): List<T> {
  if (l.isNil) return nil;
  else return l.tail;
}

// 返回替换第一个元素的List setHead

// 返回移除前n个元素的List drop，执行效率 O(n)

// 返回移除符合条件的第一个元素的List dropWhile，执行效率同上

// 返回移除最后一个元素的List init，这个函数的执行效率如何？