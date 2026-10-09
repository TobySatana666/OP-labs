'use strict';

const massive = [ 5, 666, "meow", true, false, false, 777, "I", "just", "hit", "the", "jackpot", "WOOOOOOO", 67, 3, 4, 2, false, false, true, true];

const list = {
 
};

for (const thing of massive) {
 let type = typeof thing;
const count = list[type] || 0;
    list[type] = count + 1;
 
}

console.log(list);

//завдання 4