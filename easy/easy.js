function arrayAvg(arr) {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (avg = sum / arr.length);
}
console.log(arrayAvg([1, 4, 7]));
console.log(arrayAvg([10, 5]));
console.log(arrayAvg([1.5, 3, 2.5, 1]));
