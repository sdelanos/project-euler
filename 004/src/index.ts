import Perfy from 'perfy';

export default class Main {
  public static process(): number {
    Perfy.start('perf');
    let result = 0;

    let product1 = 100;
    let product2 = 100;

    while (product1 < 1000 && product2 < 1000) {
      while (product2 < 999) {
        const current: number = product1 * product2;
        if (current.toString().length % 2 === 0) {
          if (this.isPalindrome(current)) {
            result = result < current ? current : result;
          }
        }
        product2 += 1;
      }
      product2 = 100;
      product1 += 1;
    }

    const perf = Perfy.end('perf');
    console.log(`Algorithm performance : ${perf.fullMilliseconds}ms`);
    return result;
  }

  private static isPalindrome(product: number): boolean {
    const stringified = product.toString();
    return stringified.substr(0, stringified.length / 2) === stringified.substr(stringified.length / 2).split('').reverse().join('');
  }
}

Main.process();
