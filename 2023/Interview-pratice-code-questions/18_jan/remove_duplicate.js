const nums = [2, 3, 4, 55, 22, 33, 4, 2, 5, 6];
var non_duplicate = nums.reduce(function (acc, curr) {
  if (acc.indexOf(curr) === -1) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(non_duplicate);
