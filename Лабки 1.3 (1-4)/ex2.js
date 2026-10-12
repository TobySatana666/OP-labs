'Use strict'

const needed = 'abcdefghijklmnopqrstuvwxyz0123456789';

const RANDOMKEY = (length, needed) => {
let code = '';
for (let i = 0; i < length; i++) {
 code += needed[Math.random() * needed.length | 0];
}
return code;
}

console.log(RANDOMKEY(10, needed));