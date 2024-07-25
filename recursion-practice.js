const summingArr = (arr, sum = 0, idx = 0) => {
  if (idx.length === arr.length) return sum;
  return summingArr(arr, sum + arr[idx], idx + 1);
}

console.log(summingArr([1, 2, 3]));