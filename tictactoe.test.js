/* eslint-disable no-unused-vars */
/* eslint semi: [error, "always"]  */

/* ******************************
 *  * TODO:
 * -Clean up code /comments as needed in app to make it easy to read and talk about
 *
 * -edit/add tests so they make sense for adding computer player
 *
 * -sketch out notes for how to add computer player with random and maybe AI
 *
 * submit and schedule pairing
*/

const { mark, isWin, getInput, validate, xmk, omk, switchPlayer } = require('./tictactoe');

// board marking
describe('mark board', () => {
  it('mark(1, [1, 2, 3] = [X, 2, 3]', async () => {
    expect(await mark(1, [1, 2, 3])).toEqual([`${xmk}`, 2, 3]);
  });

  it('mark(3, [1, 2, 3] should equal [1, 2, X]', async () => {
    expect(await mark(3, [1, 2, 3])).toEqual([1, 2, `${xmk}`]);
  });

  it(`mark(1, [${xmk}, 2, 3] with player 2 to return original array`, async () => {
    switchPlayer();
    expect(await mark(1, [xmk, 2, 3])).toEqual([xmk, 2, 3]);
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
  it('isWin(3, [X, X, 3]) should return true', () => {
    expect(isWin(3, [xmk, xmk, xmk, 4, 5, 6, 7, 8, 9])).toEqual(true);
  });

  it('isWin(3, [X, 2, 3]) should return false', () => {
    expect(isWin(3, [xmk, xmk, 3])).toEqual(false);
  });
});
