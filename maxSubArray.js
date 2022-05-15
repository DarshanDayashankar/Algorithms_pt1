function maxSubarraySum(arr, num) {
    const length = arr.length;
    if( num === 0 ) return null;
    else if (length < num) return null;
    else {
        let maxSubarraySum = arr[0];
        let subarraySum = arr[0];
        let windowLength = 1;
        for (let i = 1; i < length; i++) {
            if (windowLength < num) {
                subarraySum += arr[i];
                windowLength += 1;
            }
            else if (windowLength === num){
                subarraySum += arr[i] - arr[i-windowLength];
            }
            if(maxSubarraySum < subarraySum) maxSubarraySum = subarraySum;
        }
        return maxSubarraySum;
    }
}

console.log(maxSubarraySum([100, 200, 300, 400], 3));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));