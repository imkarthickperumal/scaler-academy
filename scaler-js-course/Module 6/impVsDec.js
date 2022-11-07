// we will be given a number and we have to check that if the sqaure of that number is even or not

// Imperative way of writing code

// const a = 5;
// const aSqaure = 5 * 5;
// let isEven;

// if (aSqaure % 2 == 0) {
//   isEven = true;
// } else {
//   isEven = false;
// }
// console.log(isEven);

// Declarative way of writing code

const checkForSqaure = (x) => ((x * x) % 2 === 0 ? true : flase);
console.log(checkForSqaure(4));
