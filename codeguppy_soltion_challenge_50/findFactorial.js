const num = 10;
var factorial = 1;
function findFactorial(num) {
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  console.log(factorial);
}

findFactorial(num);
