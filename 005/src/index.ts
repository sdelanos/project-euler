import Perfy from 'perfy';

export default class Main {
  public static process(input = 10): number {
    let result = 1;

    Perfy.start('perf');
    // TODO: Rework algorithm to improve performance
    for (let i = 1; i < input; i += 1) {
      if (result % i !== 0) {
        result += 1;
        i = 1;
      }
    }
    const perf = Perfy.end('perf');

    console.info(`Algorithm performance : ${perf.fullMilliseconds}ms`);
    console.info(`Algorithm result : ${result}`);
    return result;
  }
}

Main.process();
