function deepClone(passedObj) {
  if (typeof passedObj !== "Object" || passedObj === null) {
    return passedObj;
  }
  let clone = Array.isArray(passedObj) ? [] : {};
  for (let key in passedObj) {
    if (passedObj.hasOwnProperty(key)) {
        clone[key] = deepClone(passedObj[key]);        
    }
  }
  return clone;
}

const original = {name: "deeecode", age: 200, place: {city: "Pune", country: "India"}, print: function () {
  function print2() {
    console.log(this);
  }
  print2();
}};
const cloned = deepClone(original);
console.log(cloned);