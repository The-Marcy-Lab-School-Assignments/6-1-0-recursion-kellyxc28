// Calculate and return the total sum using recursive approach
const sum = (arr, idx = 0, total = 0) => {
  if (idx === arr.length) return total;
  return sum(arr, idx + 1, total + arr[idx]);
};

// console.log(sum([1, 2, 3]));

const reverse = (str, idx = str.length, newStr = '') => {
  if (idx === 0) return newStr;
  newStr += str[idx];
  return reverse(str, idx - 1, newStr);
};

console.log(reverse('recursion!'));
