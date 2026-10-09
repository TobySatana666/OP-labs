'use strict';

const massive = [ 5, 666, "meow", true, false, false, 777, "I", "just", "hit", "the", "jackpot", "WOOOOOOO", 67, 3, 4, 2, false, false, true, true];

const list = {
    number: 0,
    string: 0,
    boolean: 0
};

for (const thing of massive) {
 let type = typeof thing;
  list[type]++;
}

console.log(list);

//завдання 3