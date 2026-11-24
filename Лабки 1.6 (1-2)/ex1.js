const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const pipe = (...fns) => {
  for (const fn of fns) {
       if (typeof fn !== 'function') {
    throw new Error('required only functions');}
       }
  return (x) => {
if (fns.length === 0) {
    return x;
  }
  let res = x;
  for (let i = 0; i < fns.length; i++) {
    res = fns[i](res);
  }
 return res;
}
       };


const f = pipe(inc, cube);
console.log(f(5)); // 216