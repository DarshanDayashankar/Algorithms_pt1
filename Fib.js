const stack_size = 5;
const fib = (n, memo={}) => {
    if(n in memo) return memo[n]; 
    else if(n <= 2) return 1;
    else if (n <= stack_size){
        memo[n] = fib(n-1, memo) + fib(n-2, memo);
        return memo[n];
    }
    else {
        let temp = 0;
        while (n-temp > stack_size){
            fib(temp+stack_size, memo);
            temp += stack_size;
        }
        memo[n] = fib(n-1, memo) + fib(n-2, memo);
        return memo[n];
    }
}

// const memo = {}

// console.log(fib(1000000, memo));
// console.log(memo);

module.exports = fib;
