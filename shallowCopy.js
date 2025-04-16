const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj1 };
console.log(obj1, obj2);
obj2.a = 4;
console.log(obj1, obj2);
// { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }