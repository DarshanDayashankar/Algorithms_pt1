function insertionSort (arr) {
    if (arr.length >= 2) {
        for (let i = 1; i < arr.length; i++){
            const val = arr[i];
            let j = 0;
            for (j = i-1; j >= 0 && val < arr[j] ; j--) arr[j+1] = arr[j]; 
            arr[j] = val;
        }
    }
    return arr;
}


module.exports = insertionSort;