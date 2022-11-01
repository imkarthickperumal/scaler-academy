// some method
// Some : condition check : To get true or false based condition
// it will return true if even 1 element satisfies the condition

// some
const transastions = [-100, -200, -300, 400, -500];
let result = transastions.some((n) => {
  return n > 0;
});
console.log(result);

// every - anyone condition false 
const transastions1 = [100, -200, 300, 400, 500];
let result1 = transastions1.every((n) => {
  return n > 0;
});
console.log(result1);
