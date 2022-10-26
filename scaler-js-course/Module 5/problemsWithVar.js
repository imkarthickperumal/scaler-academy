//ES6 - var is a two variable name same values unsecurity

// var a = 16
var a = 20; // redeclaration of a variable
// console.log(a)

if (a === 35) {
  var b = 45;
  console.log(b);
}
// variable decaried with var keyword are not blocked scoped they are function scoped
console.log(b); // outside of the block of code

function test() {
  var c = 100;
  console.log(c);
}

test();

console.log(c);
