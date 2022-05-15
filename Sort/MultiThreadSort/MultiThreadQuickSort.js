const { fork } = require('child_process');

function quickSort(arr, start=0, end=arr.length-1) {
    if (arr.length <= 1) return Promise.resolve(arr);
    else if( (end - start) < 1) return null;
    else if ((end - start) < 20000) {
        const pivotPtr = getPivotPtr(arr, start, end);
        if(pivotPtr !== start) 
            quickSort(arr, start, pivotPtr-1);

        if(pivotPtr !== end)
            quickSort(arr, pivotPtr+1, end);

        return Promise.resolve(arr);
    }
    else {
        const pivotPtr = getPivotPtr(arr, start, end);
        let child1, child1Promise, child2, child2Promise = null;

        if( pivotPtr !== start ){
            child1 = fork('./Sort/MultiThreadSort/MultiThreadQuickSortWorker.js');
            child1.send({ arr: arr, start: start, end: pivotPtr-1 });
            child1Promise = new Promise((resolve) => {
                child1.on('message', (msg) =>{
                    resolve(msg.arr);
                });
            });
        }

        if( pivotPtr !== end ){
            child2 = fork('./Sort/MultiThreadSort/MultiThreadQuickSortWorker.js');
            child2.send({ arr: arr, start: pivotPtr+1, end: end });
            child2Promise = new Promise((resolve) => {
                child2.on('message', (msg) =>{
                    resolve(msg.arr);
                });
            });
        }

        return new Promise((resolve) => {
            if(child1Promise && child2Promise)
                Promise.all([child1Promise, child2Promise]).then((arrs) => {
                    resolve(arrs[0]);
                });
            else if(child1Promise) child1Promise.then((arr) => resolve(arr));
            else if(child2Promise) child2Promise.then((arr) => resolve(arr));
        }); 
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