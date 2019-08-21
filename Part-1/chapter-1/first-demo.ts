import { unzip, chain } from 'lodash';

interface CreditCard {
  charge: (price: number) => void
}

class Coffee {
  price = 10;
  constructor(...args: any) {
  }
}

// 一个有副作用的例子
class Cafe {

  buyCoffee(cc: CreditCard) {
    var cup = new Coffee();
    cc.charge(cup.price); // 副作用，涉及与外界的交互
    return cup; // 方法本身只是为了返回一杯咖啡，与信用卡的交互 works on the side
  }
}

// 此处的副作用导致的问题是什么？
// 1. 测试困难
// 2. CreditCard 本身并不应该知道付款和账单的流程

// 为了解决上述问题，有如下改进
interface Payments {
  charge: (cc: CreditCard, price: number) => void
}

class Cafe2 {

  buyCoffee(cc: CreditCard, p: Payments) {
    var cup = new Coffee();
    p.charge(cc, cup.price);
    return cup;
  }
}

// 为了测试 payments 调用 charge 的流程，会给我们带来很多麻烦事
// 依旧有副作用
// 1. 难以重用，举例：某一个人需要一次购买12杯咖啡

// 采用 FP 的解决方案，去掉副作用
class Charge {
  private creditCard;
  private price;

  constructor(cc: CreditCard, price: number) {
    this.creditCard = cc;
    this.price = price;
  }

  combine(other: Charge) {
    if (this.creditCard == other.creditCard) {
      return new Charge(this.creditCard, this.price + other.price);
    } else {
      throw console.error('无法合并不同信用卡账单');
    }
  }

  // 组合账单的逻辑
  coalesce(charges: Charge[]) {
    return chain(charges).groupBy('creditCard')
      .map((chargeList: Charge[]) => chargeList
        .reduce((c1: Charge, c2: Charge) => c1.combine(c2)));
  }
}

class Cafe3 {
  buyCoffee(cc: CreditCard) {
    var cup = new Coffee();
    return {
      cup,
      charge: new Charge(cc, cup.price)
    }; // 将信用卡处理的逻辑作为一种特殊的 value 返回，这样做的另一个好处：有利于各种 Charge 逻辑的组装
  }

  // 复用 buyCoffee 的逻辑
  buyCoffees(cc: CreditCard, count: number) {
    var purchases = new Array(count).fill(this.buyCoffee(cc));
    var [coffees, charges] = unzip(purchases);
    return {
      coffees,
      charge: charges.reduce((c1: Charge, c2: Charge) => c1.combine(c2))
    }
  }
}

// 参考透明度与替代模式的解释
// Array 的 slice 与 splice 方法