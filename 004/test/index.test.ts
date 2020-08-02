import Main from '../src';

describe('main class tests', () => {
  it('should return the right result', () => {
    expect(Main.process()).toBe(906609);
  });
});
