const inputs = [5, 7, 9, 11, 15, 17];
const inputs2 = [17, 11, 9, 7, 5];

//smallest odd missing number
// function find_missing_odd_number(inputs){
//     for (let i=0; i<inputs.length-1; i++){
//         const nextOdd = inputs[i] + 2;
//         if(nextOdd != inputs[i+1]){
//             return nextOdd;
//         }
//     }
// }

// console.log(find_missing_odd_number(inputs))

function largest_odd_missing(inputs2) {
  for (let index = 0; index < inputs2.length - 1; index++) {
    const biggest_odd = inputs2[index] - 2;
    if (biggest_odd !== inputs2[index + 1]) {
      return biggest_odd;
    }
  }
}
console.log(largest_odd_missing(inputs2));
