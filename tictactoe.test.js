
/**************************
 * Tic Tac Toe Game 
 * Test Suite
 * Recurse Center Application
 * Erich Keil
 * Dec 2021
 ************************* */

const { mark, isWin, validate, xmk } = require('./tictactoe');

// board marking
describe('mark board', () => {
  it('mark(1, [1, 2, 3], 1) = [X, 2, 3]', async () => {
    expect(await mark(1, [1, 2, 3], 1)).toEqual([`${xmk}`, 2, 3]);
  });

  it('mark(3, [1, 2, 3], 1) should equal [1, 2, X]', async () => {
    expect(await mark(3, [1, 2, 3], 1)).toEqual([1, 2, `${xmk}`]);
  });

  it(`mark(1, [${xmk}, 2, 3], 2 to log error msg`, () => {
    const log = console.log;
    console.log = jest.fn();
    mark(1, [xmk, 2, 3], 2);
    expect(console.log).toHaveBeenCalled();
    console.log = log;
  });
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

// win condition
describe('Win condition check', () => {
  it('isWin(3, [X, X, 3]) should return true', async () => {
    expect(await isWin(3, [xmk, xmk, xmk, 4, 5, 6, 7, 8, 9], 1)).toEqual(true);
  });

  it('isWin(3, [X, 2, 3]) should return false', () => {
    expect(isWin(3, [xmk, xmk, 3], 1)).toEqual(false);
  });
});
