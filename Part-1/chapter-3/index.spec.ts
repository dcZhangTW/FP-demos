import { List, asList, equal } from "./index";
import { tail } from "./utils";

describe('List data structure', () => {
  it('should remove first item', () => {
    const a: List<number> = asList(1, 2, 3, 4, 5);
    expect(equal(asList(2, 3, 4, 5), tail(a))).toBeTruthy();
  })
})