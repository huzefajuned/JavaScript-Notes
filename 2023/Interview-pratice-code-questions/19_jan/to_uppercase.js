const students = [
  { name: "bob", rollNo: 10, marks: 77 },
  { name: "rahul", rollNo: 15, marks: 37 },
  { name: "sharma", rollNo: 5, marks: 17 },
  { name: "pankaj", rollNo: 4, marks: 37 },
];


const names = students.map((name)=>{
    console.log(name.name.toUpperCase())
    // return name
})
// console.log(names)
// 