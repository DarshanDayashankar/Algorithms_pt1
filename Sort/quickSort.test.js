const quickSort = require('./quickSort.js');

const arrays = [
    [],
    [4],
    [4, 3, 2],
    [2,3,65,1,3,6,2,6,2,7,2,8,2,4],
    ['a','sa','qwq','dsafs','dqwdq'],
    ['qw',2,3,'asda',{'s':2}],
    Array.apply(null, {length: 100}).map(Function.call, Math.random),
    Array.apply(null, {length: 1000}).map(Function.call, Math.random),
    // Array.apply(null, {length: 10000}).map(Function.call, Math.random),
    // Array.apply(null, {length: 20000}).map(Function.call, Math.random),
    // Array.apply(null, {length: 40000}).map(Function.call, Math.random),
    // Array.apply(null, {length: 80000}).map(Function.call, Math.random),
]

for (array of arrays) test(`testing Sort`,() => {expect(quickSort(array)).toStrictEqual(array.sort())});