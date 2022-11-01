// filter
// Filter returns a new Array it will return all those elements that matches the specfic condition
// if the conditions is true it will return the element for that condition and if it is false it will discard the elements

let num = [1, 2, 20, 35, 12, 17, 46];
let evenNum = num.filter((n) => {
  return n % 2 == 0;
});
console.log(evenNum)