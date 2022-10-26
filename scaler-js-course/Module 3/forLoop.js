// loops are the statements that we can to control a flow of the program and to do some repetative

var a = "Hello world";

for (i = 0; i < 10; i++) {
  console.log(a);
}


// you have an Array and you have to square Each element of that array
var num =[2,3,4,5,6,7,8]

var squareArr = [] // empty array

for(i=0; i<num.length; i++){
        squareArr.push(num[i]*num[i])
}
console.log(squareArr)