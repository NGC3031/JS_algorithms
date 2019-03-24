//binary search O(logN) for sorted array
const N = 10000000;
var sortedArray = [];
const key = 465676;
// simple step recorder
var steps = 0;

//used for performance
const {
    performance
} = require('perf_hooks');

console.log(`Array size ${N} with key ${key} `);
//create arrays of numbers for testing
//sorted
for (i = 0; i < N; i++) {
    sortedArray[i] = i;
}

//test in the middle and then look either lower or higher
function binarySearch(A, n, T) {
    var middle = 0;
    left = 0;
    right = n - 1;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (A[middle] < T) {
            left = middle + 1;
        } else if (A[middle] > T) {
            right = middle - 1
        } else {
            return middle;
        }
        steps++;
    }
    return "Not found";
}

//measure the linear search for a sorted array
var t0 = performance.now();
console.log(binarySearch(sortedArray, N, key));
var t1 = performance.now();
console.log(`Search sorted array took ${t1 - t0} milliseconds with ${steps} steps.`);
//for fun the maths
//logN=steps
console.log(`Compare the theory O(logN) = ${Math.log2(N)}`);