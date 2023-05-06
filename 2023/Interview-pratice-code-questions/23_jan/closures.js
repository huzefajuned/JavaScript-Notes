function outer_Outer() {
  var day = "monday";
  function inner_Inner() {
    setTimeout(() => {
      console.log(day);
    }, 3000);
  }
  return inner_Inner();
}
outer_Outer();
