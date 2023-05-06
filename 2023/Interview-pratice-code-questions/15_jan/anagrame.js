//checking two strings are anagrame or not.

let firstName = "strong";
let secondName = "tsrong";

function isAnagrame(firstName, secondName) {
  let f_Name = firstName.split("").sort().join("");
  let s_Name = secondName.split("").sort().join("");
  console.log(f_Name);
  console.log(s_Name);

  if (f_Name == s_Name) {
    console.log("string are anagrame");
  }else{
    console.log("string are  not a anagrame");

  }
}
isAnagrame(firstName, secondName);
