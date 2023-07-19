//Декартово произведение
// A=[1,2,3] B=[5,7] -> [[1,5],[2,5],[3,5],[1,7],[2,7],[3,7]]
function cartesianProduct(arr1,arr2) {
    const result=[];
    for(let i = 0;i<arr1.length;i++) {
        for(let j=0;j<arr2.length;j++) {
            result.push([arr1[i],arr2[j]]);
        }
    }

    return result;
}
console.log(cartesianProduct([5,2],[3,4,5]));