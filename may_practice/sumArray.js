// sum of array using possible ways!.

// 1. using Reduce method
const arr=[1,2,13,4,5]
// function sumArr(arr){
//     const result = arr.reduce((acc,inc)=>{
//         return acc+inc;
//     }) 
//     console.log(result)
// }
// sumArr(arr)

// 2. using for loop
// function sumArr(arr){
//     let sum =0;
//     for ( let i=0;i<arr.length;i++){
//          sum += arr[i];
//     }
//     console.log(sum)
// }
// sumArr(arr)

// 3. using for forEach
// function sumArr(arr){
//     let sum =0;
//   arr.forEach((val,index,array)=>{
//         sum += val
//   })
//   console.log(sum)
// }
// sumArr(arr)

// 4. using for for....Of
// function sumArr(arr){
//     let sum =0;
//     for(  const num of arr){      
//         sum+= num
//     }
//   console.log(sum)
// }
// sumArr(arr)

// 5. using map Method
// function sumArr(arr){
//     let sum =0;
//     arr.map((num)=>{
//         sum += num
//     })
//   console.log(sum)
// }
// sumArr(arr)

// 6. using while loop
function sumArr(arr){
    let sum =0;
    let i=1;
   
   while( i< arr.length){
         console.log("sum")

       sum += arr[i];
       i++
   }
  console.log(sum)
}
sumArr(arr)


