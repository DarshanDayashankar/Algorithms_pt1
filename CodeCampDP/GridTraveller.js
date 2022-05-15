const grid = (n, m, memo = {}) => {
    const key = `${n},${m}`;
    if (key in memo) return memo[key];
    else if (n === 0 || m === 0) return 0;
    else if (( n === 1 && m === 2) || ( n === 2 && m === 1)) return 1;
    else {
        memo[key] = grid(n-1, m, memo) + grid(n, m-1, memo);
        return memo[key];
    }
}

console.log(grid(2, 1));
console.log(grid(2, 3));
console.log(grid(3, 2));
console.log(grid(4, 4));
console.log(grid(3, 3));
console.log(grid(18, 18));