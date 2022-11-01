// find
// Find returns the first element of an array that statisfy the condition

const transastions = [100, 200, 300, 400, 500, -600, -700];
let firstWithdrawl = transastions.find((n) => {
  return n < 0;
});
console.log(`The first withdraw find ${firstWithdrawl}`);

// findIndex

const transastions1 = [100, 200, 300, 400, 500, -600, -700];
let firstWithdrawl1 = transastions1.findIndex((n) => {
  return n < 0;
});
console.log(`The second withdraw findIndex ${firstWithdrawl1}`);
