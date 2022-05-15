function averagePair(arr, avg) {
    const length = arr.length;
    if (length > 2) {

        // Time: O(N^2) Space: O(1) Brute force

        // for (let i = 0; i < length; i++){
        //     for (let j = i+1; j < length; j++){
        //         const currAverage = (arr[i] + arr[j])/2;
        //         if (currAverage === avg) return true;
        //     }
        // }

        // Time: O(N) Space: O(N) 

        // const freqObj = {};
        // for(value of arr) freqObj[value] = (freqObj[value] || 0) + 1; // Time: O(N) Space: O(N)
        // for(value of arr) {
        //     const secondValue = (2*avg) - value;
        //     if(secondValue in freqObj) return true;
        // } // Time: O(N) Space: O(1)

        // Time: O(N) Space: O(1) Given array is sorted.
        let ptr1 = 0;
        let ptr2 = length -1;
        while (ptr1 < ptr2) {
            const currAverage = (arr[ptr1] + arr[ptr2])/2;
            if (currAverage === avg) return true;
            else if (currAverage < avg) ptr1 += 1;
            else ptr2 -= 1;
        }
        return false;
    }
    else return false;
}

function binarySearch() {
    const length = arr.length;
    if(length === 0) return false;
    else {
        // Time: O(Log(N)) Space: O(1) best implementation

        let ptr1 = 0;
        let ptr2 = length -1;
        while ((ptr2 - ptr1) > 0) {

            const ptrLength = ptr2 - ptr1 + 1;
            const median = ptr1 + Math.floor(ptrLength/2);

            if (tempArr[median] === value) return true;
            else if (value < tempArr[median]) {
                tempArr = tempArr.slice(ptr1, median);
            }
            else {
                tempArr = tempArr.slice(median+1, ptr2);
            }
        }
        return false;
    }
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));