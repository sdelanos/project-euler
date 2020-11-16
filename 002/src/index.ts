export default class Main {
  public static process(input = 4e6): number {
    let result = 0;

    for (let i = [1, 2]; i[1] < input; i = [i[1], i[0] + i[1]]) {
      if (i[1] % 2 === 0) {
        result += i[1];
      }
    }

    return result;
  }
}

Main.process();
