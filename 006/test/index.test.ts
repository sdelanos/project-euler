import Main from '../src';

describe('main class tests', () => {
  it('should return the right result', () => {
    expect(Main.process(10)).toBe(2640);
    expect(Main.process(100)).toBe(25164150);
  });
});
