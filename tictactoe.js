/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint semi: ["error", "always"] */
/* eslint space-before-function-paren: ["error", "never"] */

/* ---------------------------
    IMPORTS
--------------------------- */
const { reset } = require('chalk');
const chalk = require('chalk'); // chalk library for styling
const { resolve } = require('path');
const readline = require('readline'); // readline wrapper for stdio


/* ---------------------------
    GAME STATE
--------------------------- */
let mks = [...Array(9).keys()].map(val => val + 1);
let player;
const score = [0, 0];
let win = false;
const xmk = chalk.bold.redBright('X');
const omk = chalk.bold.blueBright('O');

const hbar = '|---|---|---|';
const board = () => {
  console.log(chalk.dim(`
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
  
  `));
};

/* ---------------------------
    INITIALIZATION
--------------------------- */
initGame();
/* ---------------------------
    GAME LOGIC
--------------------------- */
async function gameLoop() {
  while (!win) {
    let move;
    const str = 'Choose an Available Move [1-9]: ';
    move = await getInput(str);
    move = validate(move);
    if (move) {
      mks = await mark(move, mks);
      draw();
      win = isWin(move, mks);
      if (win === null) break; // draw
      if (!win) player = switchPlayer(player);
    }
  }
  winner(win === null);
  reboot();
}

/* ---------------------------
    UTILITY FUNCTIONS
---------------------------- */
async function initGame() {
  console.clear();
  console.log(chalk.bold.bgBlack.red('WELCOME TO THE TIC TAC TOE THUNDERDOME'));
  console.log(
    chalk.cyanBright(
      `Current Score: X's: ${score[0]} / Y's: ${score[1]}`
    ));

  mks = [...Array(9).keys()].map(val => val + 1);
  player = 1;
  win = false;
  await sleep(2000);
  draw();
  gameLoop();
}

function getInput(str) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => rl.question(str, ans => {
    rl.close();
    resolve(ans);
  }));
};

function validate(input) {
  let result = parseInt(input);
  if (isNaN(result) || result < 1 || result > 9) {
    result = undefined;
    console.log('invalid input, try again');
  }
  return result;
}

async function mark(pos, arr) {
  const i = pos - 1;
  if (typeof arr[i] === 'number') {
    arr[pos - 1] = player === 1 ? xmk : omk;
  } else {
    console.log(chalk.red('Square already taken, try again'));
    await sleep(2000);
  }
  return arr;
}

function switchPlayer(player) {
  return player === 1 ? 2 : 1;
}

function isWin(i, arr) {
  const winMap = new Map([
    [1, [[1, 2, 3], [1, 4, 7], [1, 5, 9]]],
    [2, [[2, 5, 8], [1, 2, 3]]],
    [3, [[1, 2, 3], [3, 6, 9], [3, 5, 7]]],
    [4, [[1, 4, 7], [1, 2, 3]]],
    [5, [[2, 5, 8], [4, 5, 6], [1, 5, 9], [3, 5, 7]]],
    [6, [[4, 5, 6], [3, 6, 9]]],
    [7, [[1, 4, 7], [3, 5, 7], [7, 8, 9]]],
    [8, [[2, 5, 8], [7, 8, 9]]],
    [9, [[7, 8, 9], [1, 5, 9], [3, 6, 9]]]
  ]);
  const test = player === 1 ? xmk : omk;
  const lines = winMap.get(i);
  const result = lines.some(val => val.every(square => arr[square - 1] === test));
  if (!result && arr.every(sq => typeof sq !== 'number')) {
    return null; // draw condition
  }
  return result;
}

function winner(draw = false) {
  if (draw) {
    console.log('DRAW');
  } else {
    console.log(`player ${player} wins!`);
    score[player - 1] += 1;
  }
}


async function reboot() {
  let ans;
  while (ans !== 'y' && ans !== 'n') {
    ans = await getInput('Play another? (y or n)');
  }
  if (ans === 'y') {
    initGame();
  };
}

function draw() {
  console.clear();
  board();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = { mark, isWin, getInput, validate, xmk, omk, switchPlayer };
