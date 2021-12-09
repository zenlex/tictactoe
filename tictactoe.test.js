/* eslint-disable no-unused-vars */
/* eslint semi: [error, "always"]  */
const { initGame, mark, isWin, winner, draw, getInput, validate } = require('./tictactoe');

test('mark(1, [1, 2, 3] = [X, 2, 3]', () => {
  expect(mark(1, [1, 2, 3])).toEqual(['X', 2, 3]);
});

// user input validation
describe('Validate input', () => {
  it('validate("3") should return int 3', () => {
    expect(validate('3')).toEqual(3);
  });

  it('validate("foo") should return undefined', () => {
    expect(validate('foo')).toEqual(undefined);
  });

  it('validate("10") should return undefined', () => {
    expect(validate('10')).toEqual(undefined);
  });
});
