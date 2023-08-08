function MergeSort(arr) {
    if(arr.length<2) {
        return arr
    }
    let left = arr.slice(0,arr.length/2)
    let right = arr.slice(arr.length/2)
    return merge(MergeSort(left),MergeSort(right))
}
function merge(left,right) {
    let res = []
    while(left.length&&right.length) {
        if(left[0]<=right[0]){
            res.push(left.shift())
        }
        else {
            res.push(right.shift())
        }
    }
    return [...res,...left,...right]
}
console.log(MergeSort([5,4,32,6,1]))

function QuickSort(arr) {
    if(arr.length<2) {
        return arr
    }
    let left = []
    let right = []
    for(let i = 0;i<arr.length-1;i++) {
        if(arr[i]<=arr[arr.length-1]) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }
    return [...QuickSort(left),arr[arr.length-1],...QuickSort(right)]
}
console.log(QuickSort([6,4,5,2,4]))