console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
console.log(flatten([1, 2, 3, [4, 5] ])); 
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1],[2],[3]]));
function flatten(arr) {
    if (arr.length === 1) {
        if(typeof(arr[0]) === 'object') return [...flatten(arr[0])];
        else return [arr[0]];
    }
    else {
        if(typeof(arr[0]) === 'object') return [...flatten(arr[0]), ...flatten(arr.slice(1))];
        else return [arr[0], ...flatten(arr.slice(1))];
    }
}