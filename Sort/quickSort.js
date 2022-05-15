function quickSort (arr, start=0, end=arr.length-1) {
    if (arr.length <= 1) return arr;
    else if( (end - start) < 1) return null;
    else {
        const pivotPtr = getPivotPtr(arr, start, end);
        if( pivotPtr !== start ) quickSort(arr, start, pivotPtr-1);
        if( pivotPtr !== end ) quickSort(arr, pivotPtr+1, end);
        return arr;
    }
}

function getPivotPtr(arr, start, end){
    let pivotPtr = start;
    let destPtr = start;
    for (let i = start+1; i <= end; i++) {
        if(arr[pivotPtr] > arr[i]) {
            if(pivotPtr !== destPtr) swap(arr, destPtr+1, i);
            destPtr++;
        }
    }
    swap(arr, destPtr, pivotPtr);
    pivotPtr = destPtr;
    return pivotPtr;
}

function swap (arr, ptr1, ptr2) {
    [arr[ptr1], arr[ptr2]] = [arr[ptr2], arr[ptr1]];
}


module.exports = quickSort;