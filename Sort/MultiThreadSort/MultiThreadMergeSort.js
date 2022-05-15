const { fork } = require('child_process');


function  mergeSort(arr) {
    if (arr.length < 2 ) return Promise.resolve(arr);
    else if (arr.length < 5000) {
        const mid = Math.floor((arr.length)/2);
        return  new Promise((resolve) =>{
            Promise.all([
                mergeSort(arr.slice(0, mid)), 
                mergeSort(arr.slice(mid, arr.length))
            ]).then((arrays) =>{
                resolve(merge(arrays[0], arrays[1]));
            });
        });
    }
    else {
        const mid = Math.floor((arr.length)/2);

        const child1 = fork('./Sort/MultiThreadSort/MultiThreadMergeSortWorker.js');
        child1.send({ arr: arr.slice(0, mid) });
        const child1Promise = new Promise((resolve) => {
            child1.on('message', (msg) => {
                resolve(msg.arr);
            })
        });

        const child2 = fork('./Sort/MultiThreadSort/MultiThreadMergeSortWorker.js');
        child2.send({ arr: arr.slice(mid, arr.length) });
        const child2Promise = new Promise(( resolve) => {
            child2.on('message', (msg) => {
                resolve(msg.arr);
            })
        });

        return new Promise((resolve) => {
            Promise.all([child1Promise, child2Promise]).then((arrays) => {
                const arrayd = merge(arrays[0], arrays[1]);
                resolve(arrayd);
            });
        }); 
    } 
}

function merge(arr1, arr2) {
    const arr = [];
    let count1 = 0
    let count2 = 0;
    while (count1 !== arr1.length || count2 !== arr2.length) {
        if(count1 === arr1.length) {
            arr.push(arr2[count2]);
            count2++;
        }
        else if(count2 === arr2.length || arr1[count1] < arr2[count2]) {
            arr.push(arr1[count1]);
            count1++;
        }
        else{
            arr.push(arr2[count2]);
            count2++;
        }
    }
    return arr;
}

module.exports = mergeSort;
