// Arrays provides you an ordered collection of data

var arr = [20, 'Scaler', true, 98.15]

console.log(arr)

// accesing the elements
var a =  arr[1]
console.log(a)

// replacing the elements of an array by using index
arr[1] = 'Scaler Academy'
console.log(arr)

// arrays length
console.log('The length of array value is' , arr.length)



// Array inbuilt methods

var arr2 = [40, 60, 50, 90]


// pop - remove the value end of array
arr2.pop()
console.log('popped array', arr2)

// push - adding the value end of array
arr2.push(100)
console.log('pushed array', arr2)

// shift - remove the value starting of array
arr2.shift()
console.log('shifted array', arr2)

// unshift - adding the value starting of array
arr2.unshift(70)
console.log('unshifted array', arr2)