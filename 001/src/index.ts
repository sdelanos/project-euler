export default class Main {
  public static process(input = 1000): number {
    let result = 0;

    for (let i = 0; i < input; i += 1) {
      if (i % 3 === 0 || i % 5 === 0) {
        result += i;
      }
    }

    return result;
  }
}
