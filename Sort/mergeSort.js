function mergeSort(arr) {
    if (arr.length < 2 ) return arr;
    else {
        const mid = Math.floor((arr.length)/2);
        return merge(
            mergeSort(arr.slice(0, mid)), 
            mergeSort(arr.slice(mid, arr.length))
        );
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