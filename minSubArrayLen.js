function minSubArrayLen(arr, num) {
    const length = arr.length;
    if (length === 0) return 0;
    else {
        let minLength = 0;
        let subArraySum = arr[0];
        let windowLength = 1;
        for (let i = 1; i < length; i++){
            subArraySum += arr[i];
            windowLength += 1;
            if(subArraySum >= num) {
                while (subArraySum >= num){
                    subArraySum  -= arr[i-windowLength+1];
                    windowLength -= 1;     
                }
                windowLength += 1;
                subArraySum  += arr[i-windowLength+1];
            }
            if(subArraySum >= num && (minLength === 0||minLength > windowLength)) minLength = windowLength;
        }
        return minLength;
    }
}

// console.log(minSubArrayLen([2,3,1,2,4,3], 7));
// console.log(minSubArrayLen([2,1,6,5,4], 9));
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52));
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39));
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55));
console.log(minSubArrayLen([4,3,3,8,1,2,3], 11));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95));