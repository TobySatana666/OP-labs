
const removeElement = (arr, item) => {
    return arr.filter(el => el !== item);
}

const removeElements = (arr, items) => {
    return arr.filter((el) => !items.includes(el));
}

const Nocopycats = (arr) => {
 return arr.filter((el, index) => arr.indexOf(el) === index);
}

const difwhat = (arr1, arr2) => {
    return arr1.filter(el => !arr2.includes(el));
}

console.log(removeElement([1, 2, 3, 4, 5], 3)); // [1, 2, 4, 5]
console.log(removeElements([1, 2, 3, 4, 5], [3, 4])); // [1, 2, 5]
console.log(Nocopycats([1, 2, 2, 3, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(difwhat([1, 2, 3, 4, 5], [3, 4])); // [1, 2, 5]