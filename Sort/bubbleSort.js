function bubbleSort (arr) {
    if (arr.length >= 2) {
        let swapped = false;
        for(let i = 0; i < arr.length-1; i++){
            swapped = false;
            for(let j = 0; j < arr.length-i-1; j++){
                if(arr[j] > arr[j+1]) {
                    const temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    swapped = true;
                }
            }
            if(!swapped) break;
        }
    }
    return arr; 
}

module.exports = bubbleSort;