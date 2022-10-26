
// hoisting function 

console.log(a);
greet();
add(2, 6);

var a = 10;

function greet() {
  console.log("Helooo Scaler");
}

var add = function (a, b) {
  console.log(a + b);
};
