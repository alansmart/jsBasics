// this function will provide count of each fruit in the array
let fruits = ["apple", "banana", "apple", "banana", "orange", "orange"];

const fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
}, {});

console.log(fruitCount);