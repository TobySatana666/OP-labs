'Use strict'

const random = (min, max) => {
const rn = Math.random();

if (max === undefined) {
   return Math.floor(rn * (min + 1));
}
return Math.floor(rn * (max - min + 1)) + min;
}

console.log(random(6, 666));
console.log(random(67));