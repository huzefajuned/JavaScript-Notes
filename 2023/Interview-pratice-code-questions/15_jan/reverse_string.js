const quote = "it's not a bug, its a feature!";

// problem : it's not a bug, its a feature!
//output : s'ti ton a ,gub sti a !arutaef
// problem:  it's not a bug, its a feature!
//output : feature! a  its bug,  a not it's

///////////////////////

const split_quote = quote.split(" ");
console.log(split_quote);
const map_splite_quote = split_quote.map((qte) => {
  const reverse_qte = qte.split("").reverse().join("");
  console.log(reverse_qte);
});


