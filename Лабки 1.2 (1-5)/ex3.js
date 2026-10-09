'use strict'

const square = (num) => {
    return num * num;
}

const cube = (num) => {
    return num * num * num;
}

const average = (num1, num2) => {
    return (num1 + num2) / 2;
}

const calculate = () => {
 const result = [];
for (let i = 0; i<=9; i++) {
    const ququ = square(i);
    const cucu = cube(i);
    const av = average(ququ, cucu);
    result.push(av);
}
return result;
}

console.log(calculate());