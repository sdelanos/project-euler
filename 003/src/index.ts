export default class Main {
  public static process(input = 13195): number {
    let result: number = input;

    while (result % 2 === 0) {
      result /= 2;
    }

    for (let i = 3; i <= Math.sqrt(result); i += 2) {
      while (result % i === 0) {
        result /= i;
      }
    }
    return result;
  }
}

Main.process();
