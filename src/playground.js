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

// console.log(reverse('recursion!'));

const fibIter = (n, arr = [0, 1]) => {
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
    console.log(arr);
  }

  return `Value: ${arr[n]}`;
};

console.log(fibIter(4));
