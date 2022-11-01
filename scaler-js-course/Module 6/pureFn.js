// Pure Function
// Given the same input, always returning the same output

// Impure Function
// var a = 10;

// function addImpure(x) {
//   console.log(x + a);
// }
// addImpure(4);

// pure function
function addPure(x, a) {
  return x + a;
}

console.log(addPure(10, 15));
