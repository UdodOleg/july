function MergeSort(arr) {
    if(arr.length<2) {return arr}
    let leftarr = arr.slice(0,Math.floor(arr.length/2))
    let rightarr = arr.slice(Math.floor(arr.length/2))
    return merge(MergeSort(leftarr),MergeSort(rightarr)) 
}
function merge(leftarr,rightarr) {
    let result = []
    while(leftarr.length&&rightarr.length) {
        if(leftarr[0]<=rightarr[0]) {
            result.push(leftarr.shift())
        }
        else {
            result.push(rightarr.shift())
        }
    }
    return [...result,...leftarr,...rightarr]
}
console.log(MergeSort([4,14,5,2]))


function QuickSort(arr) {
    if(arr.length<2) {
        return arr
    }
    let pivot = arr[arr.length-1]
    let leftarr = []
    let rightarr = []
    for(let i = 0;i<arr.length-1;i++) {
        if(arr[i]<=pivot) {
            leftarr.push(arr[i])
        }
        else {
            rightarr.push(arr[i])
        }
    }
    return [...QuickSort(leftarr),pivot,...QuickSort(rightarr)]
}
console.log(QuickSort([6,3,1,65,1]))


function InsertionSort(arr) {
    if(arr.length<2) {return arr}
    for(let i = 1;i<arr.length;i++) {
        let numtoinsert = arr[i]
        let j = i-1
        while(j>=0&&arr[j]>numtoinsert) {
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=numtoinsert
    }
    return arr
}
console.log(InsertionSort([5,3,6,1,5]))


function BubbleSort(arr) {
    let change = false
    do {
        change = false
        for(let i = 0;i<arr.length-1;i++) {
            if(arr[i]>arr[i+1]) {
                let temp = arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                change=true
            }
        }
    }
    while(change)
    return arr
}
console.log(BubbleSort([5,61,4,5,1,5]))