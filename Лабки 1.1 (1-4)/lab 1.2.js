'use strict';

const obj = {n:666};

function inc(obj) {
    obj.n = obj.n + 1;
}

inc(obj);

console.log(obj.n);

// Завдання 2