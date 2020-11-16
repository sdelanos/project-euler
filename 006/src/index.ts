import Perfy from 'perfy';

export default class Main {
  public static process(input = 10): number {
    let result = 0;

    Perfy.start('perf');
    result = this.squareSums(input) - this.sumSquares(input);
    const perf = Perfy.end('perf');

    console.info(`Algorithm performance : ${perf.fullMilliseconds}ms`);
    console.info(`Algorithm result : ${result}`);
    return result;
  }

  private static sumSquares(input: number): number {
    let sum = 0;
    for (let i = 1; i <= input; i += 1) {
      sum += i ** 2;
    }
    return sum;
  }

  private static squareSums(input: number): number {
    let sum = 0;
    for (let i = 1; i <= input; i += 1) {
      sum += i;
    }
    return sum ** 2;
  }
}

Main.process(100);
