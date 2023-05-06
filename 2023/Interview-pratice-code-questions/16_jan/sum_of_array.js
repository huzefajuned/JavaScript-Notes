const numbers = [2, 3, 4, 5, 62, 22, 33, 44, 3];
let total = numbers[0];
function sum_of_array(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    total += numbers[i];
  }
}
sum_of_array(numbers);
console.log(total);
