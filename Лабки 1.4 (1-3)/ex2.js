const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

function max(arr) {
  let maxValue = arr[0][0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > maxValue) {
        maxValue = arr[i][j];
      }
    }
  }
  return maxValue;
}
console.log(m); // 9