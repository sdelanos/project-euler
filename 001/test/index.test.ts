import Main from '../src';

describe('main class tests', () => {
  it('should return the right result', () => {
    expect(Main.process(10)).toBe(23);
    expect(Main.process(100)).toBe(2318);
    expect(Main.process(1000)).toBe(233168);
    expect(Main.process(10000)).toBe(23331668);
    expect(Main.process(100000)).toBe(2333316668);
  });
});
