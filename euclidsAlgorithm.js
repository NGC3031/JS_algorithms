//Euclidean Algorithm to find the greatest common divisors
//Given two positive intigers m and n, find their greatest common divisor, that
//is the largest positive integer which divides both n and m
// E1 [find remainder] Divide m by n and let r be the remainder 0<=r<=n
// E2 [Is zero?] End if r=0
// E3 m <- n n <-r go back to E1
// Knuth -The art of programming

//Here is a fruity Euclian Algorithm function in JS not exactly the clearest
//but it does show how close to c you can go.
function gcd(m, n) {
    if (!m || !n) return 0;
    for (r = m % n; r; m = n, n = r, r = m % n);
    return n;
}

console.log(gcd(5700, 24350));