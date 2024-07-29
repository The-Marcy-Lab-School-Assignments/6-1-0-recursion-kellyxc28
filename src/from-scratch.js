// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr, idx = 0, total = 0) => {
  if (idx === arr.length) return total;
  return sum(arr, idx + 1, total + arr[idx]);
};

// Reverse string using recursive approach
const reverse = (str, idx = str.length - 1, newStr = '') => {
  if (idx === -1) return newStr;
  newStr += str[idx];
  return reverse(str, idx - 1, newStr);
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n, arr = [0, 1]) => {
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
    console.log(arr);
  }

  return arr[n];
};

// Recursive fibonacci
const fibRec = (n) => {};

// Return the index of target in arr, or -1 if not found using recursion
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
