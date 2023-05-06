const numbers = [3, 4, 2, 4, 2, 6, 8];
const arr_Length = numbers.length;

function average_of_array(numbers) {
  const sum = numbers.reduce(function (acc, curr) {
    return (acc + curr) / arr_Length;
  });
  console.log(sum);
}
average_of_array(numbers);
