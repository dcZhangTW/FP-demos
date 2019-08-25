import { List, asList, equal } from "./index";
import { tail, setHead, drop, dropWhile, init } from "./utils";

describe('List data structure', () => {
  it('should remove first item', () => {
    const a: List<number> = asList(1, 2, 3, 4, 5);
    expect(equal(asList(2, 3, 4, 5), tail(a))).toBeTruthy();
  })

  it('should replace first item', () => {
    const a: List<number> = asList(2, 3);
    const b: List<number> = asList(1, 3);
    expect(equal(b, setHead(a, 1))).toBeTruthy();
  })

  it('should drop fist n item', () => {
    const a: List<number> = asList(1, 2, 3, 4);
    expect(equal(asList(3, 4), drop(a, 2))).toBeTruthy();
  })

  it('should drop while fit condition', () => {
    const a: List<number> = asList(1, 2, 3, 4, 5);
    expect(equal(asList(1, 3, 4, 5), dropWhile(a, (n: number) => n % 2 === 0))).toBeTruthy();
  })

  it('should remove last item', () => {
    const a: List<number> = asList(1, 2);
    expect(equal(asList(1), init(a))).toBeTruthy();
  })
})