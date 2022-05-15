const mergeSort = require('./MultiThreadMergeSort.js');


process.on('message', (msg) => {
    mergeSort(msg.arr).then((array) => {
        process.send({ arr: array});
        process.exit();
    })
})

