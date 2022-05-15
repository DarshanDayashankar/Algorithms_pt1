function selectionSort(arr) {
    if(arr.length >= 2){
        const swap = (arr, i, j) => [arr[j], arr[i]] = [arr[i], arr[j]];
        for (let i = 0; i < arr.length-1; i++){
            let min = i;
            for (let j = i+1; j < arr.length; j++){
                if (arr[min] > arr[j]) min = j;
            }
            if (min !== i) swap(arr, i, min);
        }
    }
    return arr;
}

module.exports = selectionSort;