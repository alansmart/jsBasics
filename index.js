// chaining in JS

//creating a function Shop

var obj = function () {
  this.i = 0;
  this.add = function (i) {
    this.i += i;
    return this;
  };
  this.subtract = function (i) {
    this.i -= i;
    return this;
  };
  this.print = function () {
    console.log(this.i);
    console.log(x.add(3).subtract(2));
  };
};

var x = new obj();
x.print();

// pass by value and pass by reference

var x = 10;
y = x;
x = 20;
console.log(y);
console.log(x);

var obj1 = {
  name: "John",
  age: 20,
};
var obj2 = obj1;
console.log(obj2);
obj1.name = "David";
console.log(obj2);
