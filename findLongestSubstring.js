function findLongestSubstring(str) {
    let max = 0;
    let dict = {};
    let windowLength = 0;
    for (let i = 0; i < str.length; i++) {
        while (str[i] in dict){
            delete dict[str[i-windowLength]];
            windowLength -= 1;
        }
        dict[str[i]] = 1;
        windowLength += 1;
        if(max < windowLength) max = windowLength;
    }
    return max;
}