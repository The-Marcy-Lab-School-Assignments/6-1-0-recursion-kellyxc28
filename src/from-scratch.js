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
    // console.log(arr);
  }

  return arr[n];
};

// Recursive fibonacci
const fibRec = (n) => {
  if (n < 2) return n;
  return fibRec(n - 1) + fibRec(n - 2);
};

// Return the index of target in arr, or -1 if not found using recursion
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;

  // on the left side?
  if (arr[mid] < target)
    return binarySearch(arr, target, (start = mid + 1), end);

  // on the right side?
  if (arr[mid] > target)
    return binarySearch(arr, target, start, (end = mid - 1));
};

// binarySearchIter
// const binarySearch = (arr, target) => {
//   let start = 0, end = arr.length - 1
//   while (start <= end) {
//       const mid = Math.floor((start + end) / 2)
//       if (arr[mid] === target) return mid
//       if (arr[mid] > target) end = mid - 1
//       if (arr[mid] < target) start = mid + 1
//   }
//   return -1
// };

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
