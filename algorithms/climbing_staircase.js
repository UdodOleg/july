function climbingStaircase(n) {
    const numberOfWays = [1,2];
    for(let i = 2; i <= n; i++) {
        numberOfWays[i]=numberOfWays[i-1]+numberOfWays[i-2];
    }

    return numberOfWays[n-1];
}
console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));