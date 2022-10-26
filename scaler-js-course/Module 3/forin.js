// In Javascript, the for-in loop allows you to loop through the properties of an object
// The statement of code found within the loop body will be executed once for each property of the object

// var colors = {
//     primary : 'Blue',
//     secondary : 'Red',
//     primart : 'White'
// }

// // syntax

// for(var color in colors){
//     console.log(color + '->' + colors[color])
// }


var colorsArray = ['Yellow', 'Green', 'Blue', 'Red']

for(color in colorsArray){
    console.log(color+'->' +colorsArray[color])
}