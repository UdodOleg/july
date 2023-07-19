function insertionSort(arr) {
    for(let i=1;i<arr.length;i++) {
        let numbertoInsert = arr[i];
        let j=i-1;
        while(j>=0&&arr[j]>numbertoInsert){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=numbertoInsert;
    }
    return arr;
}
const arr = [8,20,-2,4,-6];
console.log(insertionSort(arr));













