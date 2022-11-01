// Reduce
// you need the sum of every element in an array

let num = [1, 2, 3, 4, 10];

let result = num.reduce((acc, value) => {
  let updatedSum = acc + value;
  return updatedSum;
}, 0);

console.log(result);

// ans : acc = 0
//       value = 1,2,3,4,10
//       0+1 = 1
