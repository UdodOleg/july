function isPowerOfTwo(n) {
    let count = 0;
    while(n!=1) {
        if(n%2!=0) {
            return false;
        }
        else {
            n=n/2;
            count++;
        }
    }
    return true;
}
console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(2)) // true
console.log(isPowerOfTwo(5)) // false