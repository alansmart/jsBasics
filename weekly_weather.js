const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const weekly_weather = [75, 74, 64, 70, 73, 77, 79];
for (let i = 0; i < weekdays.length; i++) {
  console.log(`${weekdays[i]}: ${weekly_weather[i]}°F`);
}

// Find the smallest number in an array
let largest_number = weekly_weather[0];
let smallest_number = weekly_weather[0];
for (let i = 0; i < weekly_weather.length; i++) {
    let temp = weekly_weather[i]
    if(temp > largest_number) {
        largest_number = weekly_weather[i];
    }
    if(temp < smallest_number) {
        smallest_number = weekly_weather[i];
    }
}
console.log(`The largest number in the array is ${largest_number}`);
console.log(`The smallest number in the array is ${smallest_number}`);