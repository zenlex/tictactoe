/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint semi: ["error", "always"] */
/* eslint space-before-function-paren: ["error", "never"] */

function tictactoe() {
  /* ---------------------------
      IMPORTS
  --------------------------- */
  const chalk = require('chalk'); // chalk library for styling
  const readline = require('readline'); // readline wrapper for stdio

  /* ---------------------------
      GAME STATE
  --------------------------- */
  const mks = [...Array(9).keys()].map(val => val + 1);
  const hbar = '|---|---|---|';
  const board = `
    /@@@@@@@@@@@@@@@@@@@
    /@                 @
    /@  *-----------*  @
    /@  | ${mks[0]} | ${mks[1]} | ${mks[2]} |  @
    /@  ${hbar}  @ 
    /@  | ${mks[3]} | ${mks[4]} | ${mks[5]} |  @
    /@  ${hbar}  @
    /@  | ${mks[6]} | ${mks[7]} | ${mks[8]} |  @
    /@  *-----------*  @
    /@                 @
    /@@@@@@@@@@@@@@@@@@@
    ////////////////////
  
  `;

  console.log(board);

  /* ---------------------------
      INITIALIZATION
  --------------------------- */
  console.log(chalk.bold.bgBlack.red('WELCOME TO THE TIC TAC TOE THUNDERDOME'));
  let player = 1;
  let score = [0, 0];

  /* ---------------------------
      GAME LOGIC
  --------------------------- */


  /* ---------------------------
      UTILITY FUNCTIONS
  ---------------------------- */
  function initGame() {
    console.log('initGame');
  }
  function mark() {
    console.log('markre');
  }
  function isWin() {
    console.log('draw');
  }
  function winner() {
    console.log('winGame');
  }
  function draw() {
    console.log('draw');
  }
}

tictactoe();
// module.exports = { initGame, mark, isWin, winner, draw };
module.exports = tictactoe;
;
