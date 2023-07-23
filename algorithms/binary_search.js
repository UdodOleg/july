// //Given SORTED array. Find index of 't' in arr
// function BinarySearch(arr,n) {
//     let leftindex=0;
//     let rightindex=arr.length-1;
//     while(leftindex<=rightindex) {
//         let middleindex = Math.floor((leftindex+rightindex)/2);
//         if(n===arr[middleindex]) {
//             return middleindex;
//         }
//         (n<arr[middleindex]) ? rightindex=middleindex-1 : leftindex=middleindex+1;
//     }
//     return -1;
// }
// console.log(BinarySearch([-2,2,3,4,7,8],8)); // 5
// console.log(BinarySearch([-2,2,3,4,7,8],6)); // -1 -> false
// console.log(BinarySearch([-2,2,3,4,7,8],-2)); // 0


//RECURSION
function recursiveBinarySearch(arr,target) {
    return search(arr,target,0,arr.length-1);
}
function search(arr,target,leftindex,rightindex) {
    if(leftindex>rightindex) {return -1;}
    if(target==arr[Math.floor((rightindex+leftindex)/2)]) {return Math.floor((rightindex+leftindex)/2);}
    if(target<arr[Math.floor((rightindex+leftindex)/2)]) {
        return search(arr,target,leftindex,(Math.floor((rightindex+leftindex)/2))-1);
    }else {
        return search(arr,target,(Math.floor((rightindex+leftindex)/2))+1,rightindex);
    }
}
console.log(recursiveBinarySearch([-2,2,3,4,7,8],8)); // 5
console.log(recursiveBinarySearch([-2,2,3,4,7,8],6)); // -1 -> false
console.log(recursiveBinarySearch([-2,2,3,4,7,8],-2)); // 0