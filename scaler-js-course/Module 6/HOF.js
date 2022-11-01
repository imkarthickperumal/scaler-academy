// map returning to a new array

// Map will loop through every element of your array will perform specific operators that you have provided
// Map method will always return you a new array with your results

const arr = [1, 2, 3, 4, 5];
const squaredNum = arr.map((n) => {
  return n * n;
});
console.log(squaredNum);

const transastions = [100, 200, 300, 400, -500, -600];
const inrtoDollor = 80;
let transastionsDollor = transastions.map((amount) => {
  return (amount / inrtoDollor).toFixed(0);
});
console.log(transastionsDollor);


// forEach returning values
let transastionsDollor1 = transastions.forEach((amount)=>{
    console.log((amount/inrtoDollor).toFixed(0));
})
console.log(transastionsDollor1)