/*
 Write a program that prints the numbers from 1 to 100 and
for multiples of ‘3’ print “Fizz”
instead of the number and for the multiples of ‘5’ print “Buzz”.
 and for multiple of both 3 and 5 print 'fizzbuzz'
 */

for (let i = 1; i <= 20; i++) {
  var numbers = i;
  if (numbers % 3 === 0 && numbers % 5 === 0) {
    console.log("fizzBuzz", numbers);
  } else {
    if (numbers % 3 === 0) {
      console.log("fizz", numbers);
    } else if (numbers % 5 === 0) {
      console.log("buzz", numbers);
    }
  }
}
