// what is Js:-
/* JavaScript is asynchronous , single threaded , concurrent non-blocking
 scripting Language with lots of flexibility */

//  js was created by BRENDIN EICH in 1995.
//  while he was an enginner at Netscape.

// Data Types in js

// . Number
// . String
// . Booleans
// . Undefined
// . Null
// . Object
// . Symbol

// Array:- it is a way of listing data.
// * items under  a  single variable
//  * single object that contains multiple variables.
// * in an array we can use Varios Data Types
// const shopping = ['bread', 'butter', 'papaya', 'lichi'];
// console.log(shopping)

// ** finding the length of an Array.
// const shopping = ["bread", "butter", "papaya", "lichi"];
// console.log(shopping.length);

//arrays items index starting from zero 0;
// so the first item has zero index.

// * array insides an array is called multiDimentional Array;
// const random=[ 1, 'boy', [2,3,4]]
// console.log(random)

// ** find index of particular item from an Array. using indexOf()
// const birds = ['parrot', 'falcon', 'owl'];
// console.log(birds.indexOf('owl')) //2
//   console.log(birds.indexOf('crow')) // returns -1
// -1 which is not avalid return. it means  crow isnot avlaible in the array

// adding something in an exisiting array  using array.push() method. && array.unshift() method
// const cities = ["patna", "bihar", "pglpr", "katihar"];
// cities.push("jharkhand");
// console.log(cities); //(5) ['patna', 'bihar', 'pglpr', 'katihar', 'jharkhand']
// array.push added  items to the end of the existing array.
// array.unshift  added  items to the start of the existing array.

// removing something in an exisiting array  using array.pop() method. && array.shift() method
// const cities = ["patna", "bihar", "pglpr", "katihar"];
// cities.pop();
// console.log(cities); //(5) ['patna', 'bihar', 'pglpr'] here katihar is no more available in the array
// array.pop removes an items to the end of the existing array.
// array.shift  removes an items to the start of the existing array.

// removing item using indexes. using splice() method.
// const cities = ["patna", "bihar", "pglpr"];
// console.log(cities.splice(0, 1)); // 'patna'

// accessing arrays items using for..Of loop. && for..In loop.
// const birds = ["parrots", "owl", "crow", "cock", "hen"];

// for (const bird of birds){
//     document.getElementById("show").innerHTML=bird
//     console.log(bird);
// }

// for (const bird in birds) {
//   document.getElementById("show").innerHTML = birds;
//   console.log(birds[bird]);
// }

// accessing arrays items using map() function.
// const birds = ["parrots", "owl", "crow", "cock", "hen"];
// const myFunction = (currElem ,index) => {
//     // console.log(index)
//   return currElem
// };
// const newBirds = birds.map(myFunction);
// document.getElementById("show").innerHTML = newBirds;
// // console.log(newBirds);

// accessing arrays items using while  Loop.
// const cities = ["patna", "bihar", "pglpr"];
// let i = 0;
// let text = "";
// while (cities[i]) {
//   text += "<br/>" + cities[i];
//   i++;
// }
// document.getElementById("show").innerHTML = text;

// accessing arrays items using forEach methods..
// const array1 = ["a", "b", "c"];
// array1.forEach((element) => console.log(element));
// document.getElementById("show").innerHTML = array1;
//done
