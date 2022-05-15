// function maxSubsetSum(arr, memo = {}) {
//     let key = `${arr[0]}`;
//     for(let i = 1; i < arr.length; i++) key += `,${arr[i]}`;
//     if (arr.length === 1) return arr[0];
//     else if (arr.length < 3) return 0;
//     else if ( key in memo) return memo[key];
//     else {
//         const subSetSums = [];
//         for(let i =0 ; i < arr.length; i++){
//             if(i === 0) {
//                 subSetSums.push(arr[0] + maxSubsetSum(arr.slice(2)));
//                 for(let j of arr.slice(2)) subSetSums.push(arr[i] + j);
//             }
                
//             else if(i === arr.length-1) {
//                 subSetSums.push(
//                     arr[arr.length-1] + 
//                     maxSubsetSum(arr.slice(0, arr.length-2))
//                 );
//                 for(let j of arr.slice(0, arr.length-2)) subSetSums.push(arr[i] + j);
//             }    
//             else {
//                 subSetSums.push(
//                     maxSubsetSum(arr.slice(0,i-1)) + 
//                     arr[i] + 
//                     maxSubsetSum(arr.slice(i+2, arr.length))
//                 );
//                 for(let j of arr.slice(0,i-1)) subSetSums.push(arr[i] + j);
//                 for(let j of arr.slice(i+2, arr.length)) subSetSums.push(arr[i] + j);  
//             }
//         }
//         memo[key] =  subSetSums.reduce((max, n) => {
//             if(max < n) max = n;
//             return max;
//         },subSetSums[0]);
//         return memo[key];
//     }
// }

function maxSubsetSum(arr) {
    let incl = arr[0];
    let excl = 0;
    for (let i=1; i < arr.length; i++){
        let exclTemp = incl > excl? incl: excl;
        incl = excl + arr[i];
        excl = exclTemp;
    }

    return incl > excl? incl: excl;
}


console.log(maxSubsetSum([-2, 1, 3, -4, 5]));
