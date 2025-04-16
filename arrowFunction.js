const obj = {
  name: "deeecode",
  age: 200,
  print: function () {
    function print2() {
      console.log(this);
    }

    print2();
  },
};

obj.print();
// Window

let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;
console.log(rabbit);
console.log(rabbit.eats); // true
