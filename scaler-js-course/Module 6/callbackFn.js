// Callback Function

// function printFirstname(firstname, cb) { // arguments
//   console.log(firstname);
//   cb("Full Stack Developer");
// }

// function printLastname(lastname) {
//   console.log(lastname);
// }

// printFirstname("karthick", printLastname); // this is a callback

const isEven = (n) => {
  return n % 2 === 0;
};

let printResult = (evenFn, num) => {
  const isNumEven = evenFn(num);
  console.log(`The Numbers ${num} is an Even Number ${isNumEven}`);
};

printResult(isEven, 9);
