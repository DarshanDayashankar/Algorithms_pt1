const bestSum = (targetSum, numbers, memo = {}) => {
    if(targetSum === 0) return [];
    else if (targetSum < 0) return null;
    else if (targetSum in memo) return memo[targetSum];
    else {
        let bestCombination = null;
    
        for (let number of numbers) {
            const remainder = targetSum - number;
            const remainderResult = bestSum(remainder, numbers, memo);
            if (remainderResult !== null){
                const combination = [...remainderResult, number];
                if ( bestCombination === null || combination.length < bestCombination.length){
                    bestCombination = combination;
                }
            }
        }
        memo[targetSum] = bestCombination;
        return bestCombination;
    }
}

console.log(bestSum(7, [2, 3, 1]));