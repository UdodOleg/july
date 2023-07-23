function Shuffle_Sort(arr) {
    let left = 0, right = arr.length-1
    while(left<right) {
        for(let i = left; i<right;i++) {
            if(arr[i]>arr[i+1]) {
                let temp = arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
            }
        }
        right--
        for(let i = right;i>left;i--) {
            if(arr[i]<arr[i-1]) {
                let temp = arr[i]
                arr[i]=arr[i-1]
                arr[i-1]=temp
            }
        }
        left++
    }
    return arr
}
console.log(Shuffle_Sort([5,4,1,6,13,5]))