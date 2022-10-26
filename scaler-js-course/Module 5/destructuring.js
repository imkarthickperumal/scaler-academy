// The destructuring assignment syntax is a Javascript exprssion that makes it possible to unpack values
// from arrays, or properties from objects, into distinct variables.

// particular variables to set a arrays


// Destructuring Arrays
let arr = ["Hi", "I", "am", "Karthick"];

// let a = arr[1] // I
// let b = arr[2] // am

// let [a, b, c, d] = arr;
// console.log(c) 


// Destructureing Objects
// Another name foer key using keys: <anothe_name> like name : n

let myObj = {
    name : 'Karthi',
    age : 24,
    gender : 'M',
    address : {
        country : 'India',
        city : 'Chennai'
    }
}

let {name : n, age: a, gender:g, address : {country:c} } = myObj

console.log(n)// another name for key n 
console.log(a)
console.log(g)
console.log(c) // Nested obj keys
