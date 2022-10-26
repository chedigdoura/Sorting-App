function sortingApp(arr){
    let temp=0
    for (let i = 1 ; i<arr.length ;i++){
        if (arr[i] < arr[i-1]){
        temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
        }
    return arr
    }
}