// In Js Objects key value pair

var person = {
    firstName : 'Scaler',
    secondName : 'Academy',
    age : 2,
    location : 'Bengalure'
}

console.log(person)

// dot notation
console.log(person.firstName) // Scaler

// bracket notation
console.log(person['secondName']) // Academy


var cap = {
    firstName : 'Steve',
    lastName : 'Rogers',
    age: 102,
    friends : ['Bucky Barnes', 'Bruce Banner', 'Tony Stark'],
    isAvengers : true,
    address : {
        state : 'New York',
        city : {
            name : 'Brooklyn',
            pincode: 123456
        }
    }
}

console.log(cap.friends[2]) // Tony Stark
console.log(cap.address.city.name) // Brooklyn
cap.isAvengers = false
console.log(cap)

// adding obj an array
cap.movies = ['age of ultran', 'civil war', 'first avenger']
console.log(cap)


// delete obj key values
delete cap.age
console.log(cap)