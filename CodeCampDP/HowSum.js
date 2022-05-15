const howSum = (targetSum, numbers, memo = {}) => {
    if(targetSum === 0) return [];
    else if (targetSum in memo) return memo[targetSum];
    else if (targetSum < 0) return null;
    else for (let number of numbers){
        const remainder = targetSum - number;
        const remainderResult = howSum(remainder, numbers, memo);
        if(remainderResult !== null) {
            memo[targetSum] = [...remainderResult, number];
            return memo[targetSum];
        }
    }
    memo[targetSum] =  null;
    return null;
};

console.log(howSum(300, [14, 7]));