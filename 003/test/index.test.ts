import Main from '../src';

describe('main class tests', () => {
  it('should return the right result', () => {
    expect(Main.process(13195)).toBe(29);
    expect(Main.process(600851475143)).toBe(6857);
  });
});
