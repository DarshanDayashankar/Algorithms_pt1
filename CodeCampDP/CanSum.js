const canSum = (targetSum, numbers, memo={}) => {
    if(targetSum === 0) return true;
    else if(targetSum in memo) return memo[targetSum];
    else if(targetSum < 0) return false;
    else for (number of numbers){
        const remainder = targetSum - number;
        if(canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

console.log(canSum(300, [7, 14]));
console.log(canSum(300, [7, 1]));
console.log(canSum(7, [2, 3]));
console.log(canSum(7, [2, 4]));