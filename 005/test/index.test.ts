import Main from '../src';

describe('main class tests', () => {
  it('should return the right result', () => {
    expect(Main.process(10)).toBe(2520);
    expect(Main.process(20)).toBe(232792560);
  });
});
