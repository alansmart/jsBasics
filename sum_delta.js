//consider a function with having array argument
// return the sum of the difference between the values in the array.
function sum_delta(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum += Math.abs(arr[i] - arr[i+1]);
    }
    return sum;
}

console.log(sum_delta([1, 2, 3, 4, 5])); // 4
console.log(sum_delta([2, 2, 2, 2, 2])); // 0
console.log(sum_delta([1, 2, 3, 4, 5, 6])); // 5
console.log(sum_delta([])); // 0
console.log(sum_delta([1])); // 0