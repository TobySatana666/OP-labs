const object = { a: 1, b: 2, c: 3 }

function iterate (object, callback){
  for (const key in object) {
    const value = object[key];
    callback(key, value, object);
  }
}
iterate(object, (key, value) => {
  console.log({ key, value });
});

const store = (value) => {
    return () => value
}

const contract = (fn, ...types) => (...arg) => {
    for (let i = 0; i < types.length; i++) {
        const arg = arg[i]
        const type = types[i]
        const name = type.name.toLowerCase();
        if (typeof arg !== name) {
            throw new TypeError(`Argument type ${name} expected`);
            
        }
    }
const result = fn(...arg)
const type = types[types.length - 1]
const name = type.name.toLowerCase();
if (typeof result !== name) {
    throw new TypeError(`Return type ${name} expected`);
}
return result
}

const read = store(5)
console.log(read());