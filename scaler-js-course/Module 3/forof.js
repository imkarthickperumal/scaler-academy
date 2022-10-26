// The for of statement creates a loop iterable objects,
// including: built-in String, array-like objects like Nodelist and also map and set

// var scores = [60,90,85,75]

// for (var score of scores) {
//     console.log(score)
// }

// method - entries()

let colors = ["Red", "White", "Green"];

for (var [index, color] of colors.entries()) {
  console.log(index + "->" + color);
}


// String 

var str = 'Scaler'
for(var c of str){
    console.log(c)
}