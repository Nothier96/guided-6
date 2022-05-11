function targetIndex(arr, target) {
  let ind = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      ind = arr.indexOf(arr[i]);
    }
  }
  return ind;
}

console.log(targetIndex([4, 5, 6, 7, 0, 1, 2], 0));
console.log(targetIndex([4, 5, 6, 7, 0, 1, 2], 3));
