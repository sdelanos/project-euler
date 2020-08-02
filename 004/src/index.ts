import Perfy from 'perfy';

export default class Main {
  public static process(): number {
    let result = 0;
    let product1 = 100;
    let product2 = 100;

    Perfy.start('perf');

    // TODO: Rework algorithm to improve performance
    while (product1 < 999 && product2 < 999) {
      const current = product1 * product2;

      if (this.isPalindrome(current)) {
        result = result < current ? current : result;
      }
      product1 += 1;

      if (product1 === 999) {
        product1 = 100;
        product2 += 1;
      }
    }
    const perf = Perfy.end('perf');

    console.log(`Algorithm performance : ${perf.fullMilliseconds}ms`);
    console.log(`Algorithm result : ${result}`);
    return result;
  }

  private static isPalindrome(product: number): boolean {
    const stringified = product.toString();
    return stringified === stringified.split('').reverse().join('');
  }
}
