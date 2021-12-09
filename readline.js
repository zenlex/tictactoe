/* eslint semi: [error, always] */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Choose an Available Position [1-9]: '
});

rl.prompt();

rl.on('line', (input) => {
  console.log('input: ', input);
  console.log('type: ', typeof input);
  const result = parseInt(input);
  console.log('result: ', result);
  rl.close();
});
