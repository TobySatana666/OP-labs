const array = () => {
  const arr = [];
  const get = (i) => arr[i];
  get.push = (x) => arr.push(x);
  get.pop = () => arr.pop();
  return get;
}

const arr = array();
arr.push('Hello');
arr.push('World');
arr.push('Blah blah')
console.log(arr.pop(2)); 