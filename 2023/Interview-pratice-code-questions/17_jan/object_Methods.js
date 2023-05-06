// Loop Through objects in javascript..
//we can loop an object by three ways in js.
// 1. object.keys
// 2. object.values
// 3. object.entries

//-------- 1. object.keys

// const books = {
//   Mathematics: 22,
//   Physics: 23,
//   Chemistry: 32,
// };

// const books_Key= Object.keys(books);
// console.log(books_Key);

// books_Key.forEach((book, index)=>{
//     console.log(book,books[book])
// })


//-------- 2. object.values
// const books = {
//   Mathematics: 22,
//   Physics: 23,
//   Chemistry: 32,
// };

// const books_Values =  Object.values(books)
// books_Values.forEach((book, index) => {
//         console.log(book, books[book])
// });


//-------- 3. object.entries
const books = {
  Mathematics: 22,
  Physics: 23,
  Chemistry: 32,
};
const books_Entries = Object.entries(books);
// console.log(books_Entries);

for ( array of books_Entries ){
    array.map(element => {
        console.log(element)
});
}
