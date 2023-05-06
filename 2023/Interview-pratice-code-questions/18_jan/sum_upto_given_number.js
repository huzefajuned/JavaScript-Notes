const num = 12;

function sum_upto_given_number(num) {
  for (let i = 1; i <= num; i++) {
    var val = [];
    // val.push(i);
    console.log(val);
    const sum = val.reduce(function (acc, curr) {
      return acc + curr;
      console.log(acc, curr)
    });
    // console.log(sum);
  }
}

sum_upto_given_number(num);
