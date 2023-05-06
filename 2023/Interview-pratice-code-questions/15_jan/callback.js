//Callback Function
function modify_Array(arr, callback) {
  arr.push(786);
  callback();
}
const arr = [10, 2, 3, 555, 2121, 34];

modify_Array(arr, function () {
  console.log("Modified Array Is", arr);
});
