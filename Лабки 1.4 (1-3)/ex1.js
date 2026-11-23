/*Цикл for
Цикл for..of
Цикл while
Цикл do..while
Метод Array.prototype.reduce()*/

function sum1(...args) {
  let value = 0;
  for (let i = 0; i < args.length; i++) {
    value += args[i];
  }
  return value;
}


function sum2(...args) {
  let value = 0;
  for (const arg of args) {
    value += arg;
  }
  return value;
}


function sum3(...args) {
  let value = 0;
  let i = 0;
  while (i < args.length) {
    value += args[i];
    i++;
  }
  return value;
}


function sum4(...args) {
  let value = 0;
  let i = 0;
  do {
    value += args[i];
    i++;
  } while (i < args.length);
  return value;
}


function sum5(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}


const a = [1, 2, 3] // a === 6
const b = [0] // b === 0
const c = sum1() // c === 0
const d = [1, -1, 1] // d === 1
const e = [10, -1, -1, -1]; // e === 7
console.log(sum3(...a));
