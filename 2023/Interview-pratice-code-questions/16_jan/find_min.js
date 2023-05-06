const nums = [20, 333, 23, 12, 56, 54, 2, 34, 67];
let mins = nums[0];

for (let index = 1; index < nums.length; index++) {
  const element = nums[index];

  if (element < mins) {
    mins = element;
  }
}

console.log(mins);
