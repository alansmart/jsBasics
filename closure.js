var name = "Alankar";

function outerFunction(outerparameter) {
    var outerVariable = "I am outside!";
    function innerFunction(innerParameter) {
        var innerVariable = "I am inside!";
        console.log("outerVariable: " + outerVariable);
        console.log("innerVariable: " + innerVariable);
        console.log("outerparameter: " + outerparameter);
        console.log("innerParameter: " + innerParameter);
        console.log("name: " + name);
        console.log("newName: " + newName);
    }
    return innerFunction;
}

outerFunction("Hello, closure outer!")("Hello, closure inner!");

var newName = "Nupur";
outerFunction("Hello, closure outer!")("Hello, closure inner!");
