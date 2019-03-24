//linear search
const N = 10000;
var unsortedArray = [];
var sortedArray = [];
const key = 4676;
const {
    performance
} = require('perf_hooks');

console.log(`Array size ${N} with key ${key} `);
//create arrays of numbers for testing
//unsorted
for (var i = 0; i < N; i++) {
    unsortedArray[i] = Math.floor(Math.random() * N);
}
//sorted
for (i = 0; i < N; i++) {
    sortedArray[i] = i;
}

//measure the linear search for a sorted array
var t0 = performance.now();
for (i = 0; i < N; i++) {
    if (sortedArray[i] == key) break;
}
var t1 = performance.now();
console.log("Search sorted array took " + (t1 - t0) + " milliseconds.");

//measure the linear search for an unsorted array
t0 = performance.now();
for (i = 0; i < N; i++) {
    if (unsortedArray[i] == 76) break;
}
t1 = performance.now();
console.log("Search unsorted array took " + (t1 - t0) + " milliseconds.");