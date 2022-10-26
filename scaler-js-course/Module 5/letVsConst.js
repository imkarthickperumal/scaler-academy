var a = 20;
var a = 40;
console.log(a);

// Solution 1 of the Redeclaration problem
let b = 50;
// let b = 60 // cannot declare variale name but reasign ex: b = 55 (only variable name not let used let keyword)
console.log(b);

// Solution 2
if (true) {
  let c = 20;
  console.log(c);
}
//  variables declared with let keyword are block scoped
console.log(c);




// const
// const cannot Redclaration & reasign variable name 
const d = 100
// d = 110 
console.log(d)


//         Redeclaration    Ressignament       Scoping   
// var        yes               yes            function
// let        no                yes            block
// const      no                no             block
