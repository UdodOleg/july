function gnome_sort(arr) {
    let i = 1,j = 2
    while(i<arr.length) {
        if(arr[i-1]<arr[i]) {
            i=j
            j++
        }
        else {
            let temp = arr[i-1]
            arr[i-1]=arr[i]
            arr[i]=temp
            i--
            if(i===0) {
                i=j
                j++
            }
        }
    }
    return arr
}
console.log(gnome_sort([55,4,2,6,1]))