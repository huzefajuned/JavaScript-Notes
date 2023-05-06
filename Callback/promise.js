// let promiseA = Promise.resolve('A')
// let promiseB = Promise.resolve('B')
// let promiseC = Promise.resolve('C')
// let promiseD = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 1000, 'C')
// })
// Promise.all([promiseA, promiseB, promiseC, promiseD])
//     .then(([resultA, resultB, resultC, resultD]) => {
//         console.log("Result to oromise is : ", resultA);
//         console.log("Result to oromise is : ", resultB);
//         console.log("Result to oromise is : ", resultC);
//         console.log("Result to oromise is : ", resultD);
//     }).catch((error) => {
//         console.log("some errors occcurs")
//     })

// Explain what a callback function is and provide a simple example
const arr = [1, 2, 3, 4, 5, 7];
const modilfyArray = (arr, callback) => {
  console.log(arr);
  arr.push(99);
  callback();
};

modilfyArray(arr, function () {
  console.log("Making a call callback function", arr);
});

