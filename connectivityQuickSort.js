// Connectivity Quick sort. Use at own risk for path finding
// the outputs are left in if you want to see the step by step updates
// Just uncomment them.
// Finds the connections from pairs of numbers in the numberPairs array and 
// displays the connections 
const N = 100;
var numberPairs = [];
var storeArray = [];
var str = ' ';
//create array of numbers for testing
for (var i = 0; i < N; i++) {
    numberPairs[i] = Math.floor(Math.random() * N);
}
//c

//create storage array
for (var i = 0; i < N; i++) {
    storeArray[i] = 0;
}
//console.log(storeArray.toString());
//console.log(numberPairs.length);

// if p!=q then enter the 2nd value in the pth cell of storeArray
for (var i = 0; i < N - 1; i++) {
    var p = numberPairs[i];
    var q = numberPairs[i + 1];
    if (p != q) {
        storeArray[p] = q;
    }
    console.log(storeArray.toString());
}
console.log(numberPairs.toString());

console.log('Connections:');
//look for equal values in array cells and output the paths
for (var i = 0; i < N; i++) {
    //get the first value and find where else it occurs
    p = storeArray[i];
    str = p;
    for (var j = 1; j < N; j++) {
        if (j != i) {
            if (p == storeArray[j]) {
                str = str + '-' + j;
            }
        }
    }
    console.log(str);
}