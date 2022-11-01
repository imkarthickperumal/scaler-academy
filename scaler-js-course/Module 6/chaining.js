let arr = [
  { name: "A", age: 14, gender: "M" },
  { name: "B", age: 15, gender: "M" },
  { name: "C", age: 16, gender: "F" },
  { name: "D", age: 17, gender: "F" },
  { name: "E", age: 18, gender: "M" },
  { name: "I", age: 19, gender: "F" },
  { name: "G", age: 20, gender: "M" },
  { name: "H", age: 21, gender: "F" },
];

// Age of All the Men(Males)

let maleAges = arr
  .filter((obj) => {
    return obj.gender == "M";
  })
  .map((male) => {
    return male.age;
  });
console.log(maleAges);
