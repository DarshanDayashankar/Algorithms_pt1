const {
    performance
  } = require('node:perf_hooks');
const mergeSort = require('./MultiThreadMergeSort.js');

// jest.setTimeout(100000);

const arrays = [
    [],
    [4],
    [4, 3, 2],
    [2,3,65,1,3,6,2,6,2,7,2,8,2,4],
    ['a','sa','qwq','dsafs','dqwdq'],
    ['qw',2,3,'asda',{'s':2}],
    Array.apply(null, {length: 100}).map(Function.call, Math.random),
    Array.apply(null, {length: 100}).map(Function.call, Math.random),
    Array.apply(null, {length: 100}).map(Function.call, Math.random),
    Array.apply(null, {length: 100}).map(Function.call, Math.random),
    Array.apply(null, {length: 1000}).map(Function.call, Math.random),
    Array.apply(null, {length: 10000}).map(Function.call, Math.random),
    Array.apply(null, {length: 20000}).map(Function.call, Math.random),
    Array.apply(null, {length: 40000}).map(Function.call, Math.random),
    Array.apply(null, {length: 80000}).map(Function.call, Math.random),
]

// const sortedTestArrayPromises = [];

// arrays.forEach((array) => {
//     sortedTestArrayPromises.push(mergeSort(array));
// });

// const sortedArrays = [];

// arrays.forEach((array) => {
//     sortedArrays.push(array.sort());
// });

for (array of arrays){
    const t0 = performance.now();
    mergeSort(array).then((arrayd) => {
        console.log(arrayd.length);
        console.log(arrayd === array.sort());
        const t1 = performance.now();
        console.log(Math.floor(t1-t0), 'ms');
    });
}

// for (let i = 0; i < sortedTestArrayPromises.length; i++) {
//     test('testing Sort', () => {
//         return sortedTestArrayPromises[i].then(array => expect(array).toStrictEqual(sortedArrays[i]));
//     });
// }

// for (array of arrays) {
//     test('testing Sort', () => {
//         return mergeSort(array).then((arrayd) => expect(arrayd).toStrictEqual(array.sort()));
//     });
// }
