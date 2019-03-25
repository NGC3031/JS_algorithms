//bubble sort an unsorted array O(n^2) - an exchange sort
// not really much use practically but important to know.
const N = 100;
var unsortedArray = [];
const key = 465676;
// simple step recorder
var steps = 0;

//used for performance measurement
const {
    performance
} = require('perf_hooks');

//create arrays of numbers for testing
//unsorted
for (var i = 0; i < N; i++) {
    unsortedArray[i] = Math.floor(Math.random() * N);
}

//test in the middle and then look either lower or higher
function bubbleSort(A) {
    let n = A.length;
    let swapped = true;
    while (swapped == true) {
        swapped = false;
        for (var i = 0; i < n - 1; i++) {
            if (A[i] > A[i + 1]) {
                let temp = A[i];
                A[i] = A[i + 1];
                A[i + 1] = temp;
                swapped = true;
                steps++;
            }
        }
    }
}

console.log('Before\n' + unsortedArray.toString());
//measure the linear search for a sorted array
var t0 = performance.now();
bubbleSort(unsortedArray);
var t1 = performance.now();
console.log(`Bubble Sort array took ${t1 - t0} milliseconds with ${steps} steps.`);

console.log('After\n' + unsortedArray.toString());