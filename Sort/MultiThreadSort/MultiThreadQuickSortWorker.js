const mergeSort = require('./MultiThreadMergeSort.js');


process.on('message', (msg) => {
    mergeSort(msg.arr, msg.start, msg.end).then((array) => {
        process.send({ arr: array});
        process.exit();
    })
})

