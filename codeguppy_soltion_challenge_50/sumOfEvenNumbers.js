// problem 1
// find sum of all even numbers from an array
const arr = [9, 2, 3, 4, 22, 3, 444, 56, 7, 8];
let sum = 0;
function sumOfEvens(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumOfEvens(arr));

// sumOfEvens(arr);
