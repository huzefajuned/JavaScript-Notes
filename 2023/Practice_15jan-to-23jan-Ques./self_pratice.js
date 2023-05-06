//1. find min and max number from an given array.
// const array = [65, 43, 54, 24, 654, 1356, 7443, 33];

// function minAndMax(array) {
//   let min = array[0];
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     // checking for minimum value...
//     // if (array[i] < min) {
//     //   min = array[i];
//     // }

//     // checking for maximum value...
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   //   return min;
//   return max;
// }
// const output = minAndMax(array);
// console.log(output);
// =============================================================

//2. reverse string ...
// let mySentence = "Record transactions in Cloud Bigtable";
// let split_mySentence = mySentence.split(" ");
// split_mySentence.map((elem, ind) => {
//   var rev = elem.split("").reverse().join("");
//   console.log(rev);
// });
// =============================================================

//3. sum of array. using reduce().
// const array = [22, 33, 55, 1, 3, 55, 77, 88];
// //a.
// const sum = array.reduce((curr, acc) => {
//   return curr + acc;
// });
// console.log(sum);
// //b.
// function Sum(array) {
//   return array.reduce((curr, acc) => {
//    return  curr + acc;
//   });
// }
// console.log(Sum(array));
// =============================================================

//4. calculate average of given array..
// const array = [2, 3, 4, 5, 6, 8, 9];
// function Average(array) {
//   const length = array.length;
//   const Sum = array.reduce((curr, acc) => {
//     return curr + acc;
//   });
//   const avrg = Sum / length;
//   console.log(avrg);
//   console.log(Math.round(avrg));
// }
// Average(array);
// =============================================================

//5. find missing odd or even number from an array

const array = [3, 5, 7, 9, 13.15, 17];
