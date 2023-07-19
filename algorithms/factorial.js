//LINEAR
// function factorial(n) {
//     let result = 1;
//     for(let i = 2;i<=n;i++) {
//         result*=i;
//     }
//     return result;
// }

//RECURSION
function factorial(n) {
    if(n==0) {
        return 1;
    }
    else {
        return n* factorial(n-1);
    }
}
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 5*4*3*2*1=120