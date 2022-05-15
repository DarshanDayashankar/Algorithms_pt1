    function areThereDuplicates() {
        const arr = [...arguments];
        const length = arr.length;
        
        if (length > 1){

            // Time: O(N) Space: O(N) frequency Counter pattern

            // const arrFreqCount = {};
            // for (let value of arr) {
            //     if(value in arrFreqCount) return true;
            //     else arrFreqCount[value] =  1;
            // }

            // Time: O(N Log(N)) Space: O(N) binary Search pattern

            // arr.sort(); // Time: O(N Log(N)) Space: O(1)
            // for (let i = 0; i < length; i++) {
            //     const value = arr.pop();
            //     if (binarySearch(arr, value)) return true;
            // } // Time: O(N Log(N)) Space: O(N)

            // Time: O(N Log(N)) Space: O(1) Multiple pointers
            arr.sort(); // Time: O(N Log(N)) Space: O(1)
            let prevTemp = arr[0];
            for (let i = 1; i < length; i++){
                if(prevTemp === arr[i]) return true;
                else prevTemp = arr[i];
            } // Time: O(N) Space: O(1)

            return false;
        }
        else return false;
    }

    function binarySearch (arr, value) {
        const length = arr.length;
        if(length === 0) return false;
        else {

            // Time: O(Log(N)) Space: O(N) recursive

            // let tempArr = arr;
            // const median = Math.floor(tempArr.length/2);
            // if (tempArr[median] === value) return true;
            // else if (value < tempArr[median]) {
            //     tempArr = tempArr.slice(0, median);
            // }
            // else {
            //     tempArr = tempArr.slice(median+1, tempArr.length);
            // }
            // return binarySearch(tempArr, value);

            // Time: O(Log(N)) Space: O(N)) non recursive

            // let tempArr = arr;
            // while (tempArr.length > 0) {
            //     const median = Math.floor(tempArr.length/2);
            //     if (tempArr[median] === value) return true;
            //     else if (value < tempArr[median]) {
            //         tempArr = tempArr.slice(0, median);
            //     }
            //     else {
            //         tempArr = tempArr.slice(median+1, tempArr.length);
            //     }
            // }

            // Time: O(Log(N)) Space: O(1) best implementation

            let ptr1 = 0;
            let ptr2 = length -1;
            while ((ptr2 - ptr1) > 0) {
                const ptrLength = ptr2 - ptr1 + 1;
                const median = ptr1 + Math.floor(ptrLength/2);
                if (tempArr[median] === value) return true;
                else if (value < tempArr[median]) ptr2 = median-1;
                else ptr1 = median+1;
            }
            return false;
        }
    }

console.log(areThereDuplicates(1, 2, 3, 4));
console.log(areThereDuplicates(1, 2, 3, 4, 5, 2, 3));
console.log(areThereDuplicates('a', 'da', 'aa', 'ad'));
