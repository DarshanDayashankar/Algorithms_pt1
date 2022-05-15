function isSubsequence(str1, str2) {
    if (str1.length === 0) return true;
    else if (str2.length === 0) return false;
    else {
        // Time: O(N) Space: O(1)
        let str1Count = 0;
        for (let i = 0; i < str2.length; i++){
            if(str2[i] === str1[str1Count]) str1Count += 1;
            else str1Count = 0;
            if(str1Count === str1.length) return true;
        }
        return false;
    } 
}

console.log(isSubsequence('hello', 'hello world'));