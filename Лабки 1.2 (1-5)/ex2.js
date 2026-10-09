'use strict'

const range = (start, end) => {
const result = [];
for (let i = start; i <= end; i++) {
result.push(i);
}
return result;
};

console.log(range(15, 30));


const rangeOdd = (start, end) => {
 const result = [];
 if (start %2 === 0) {
    start++;
}
for (let i = start; i <= end; i += 2) {
    result.push(i);
}
return result;
};

console.log(rangeOdd(15, 30));
