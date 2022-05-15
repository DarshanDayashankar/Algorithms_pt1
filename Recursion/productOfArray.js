function productOfArray(arr) {
    if (arr.length === 0) return 1;
    else {
        const value = arr.pop();
        console.log(value);
        return value * productOfArray(arr);
    }  
}


console.log(productOfArray([1,2,3]));
console.log(productOfArray([1,2,3,10]));