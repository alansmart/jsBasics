let o = {name: "Ravi"};

function changeName(obj) {
    obj.name = {name: "John"};
    console.log(obj.name);
}

changeName(o);
console.log(o.name);

