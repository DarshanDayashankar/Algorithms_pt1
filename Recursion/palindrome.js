function isPalindrome(str){
    const length = str.length;
    if (length <= 1) return true;
    else {
        return str[length-1] === str[0] && isPalindrome(str.slice(1, length-1));
    }
}