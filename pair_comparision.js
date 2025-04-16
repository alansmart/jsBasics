var weekly_weather = [75, 74, 64, 70, 73, 77, 79];
let max_delta = Math.abs(weekly_weather[0] - weekly_weather[1]);
for (let i = 0; i < weekly_weather.length - 1; i++) {
    let delta = Math.abs(weekly_weather[i] - weekly_weather[i + 1]);
    console.log("comapring", weekly_weather[i], weekly_weather[i+1], delta);
    if (delta > max_delta) {
        max_delta = delta;
    }
}
console.log("max_delta", max_delta);