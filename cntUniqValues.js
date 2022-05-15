function countUniqueValues(arr){
    if (arr.length === 0) return 0;
    else if (arr.length === 1) return 1;
    else {
        let count = 1;
        let pointer = 0;
        for (let i = 1; i < arr.length; i++ ) {
            if (arr[pointer] !== arr[i]) {
                count += 1;
                pointer = i;
            }
        }
        return count;
    }
}


console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([]));
console.log(countUniqueValues(1, 2, 3,));
console.log(countUniqueValues([-2, -1, -1, 0, 2]));