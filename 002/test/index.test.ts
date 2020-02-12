import { Main } from '../src';

describe('main class tests', () => {
  it('should return the right result', () => {
    expect(Main.process(100)).toBe(44);
    expect(Main.process(100000)).toBe(60696);
    expect(Main.process(1000000)).toBe(1089154);
    expect(Main.process(4000000)).toBe(4613732);
    expect(Main.process(100000000)).toBe(82790070);
  });
});
