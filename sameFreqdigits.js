function sameFrequency(num1, num2) {
    const arr1 = numToArr(num1);
    const arr2 = numToArr(num2);
    if(arr1.length !== arr2.length) return false;
    else {
        const arr1FreqCount = arrFreqCount(arr1);
        // const arr2FreqCount = arrFreqCount(arr2);
        // for (let num in arr1FreqCount) {
        //     if( !(num in arr2FreqCount) ) return false;
        //     else if (arr1FreqCount[num] !== arr2FreqCount[num]) return false;
        // }
        for (let num of arr2) {
            if (!( num in arr1FreqCount)) return false;
            else {
                arr1FreqCount[num] -= 1;
                if (arr1FreqCount[num] < 1) delete arr1FreqCount[num];
            }
        }
        return true;
    }
}

function arrFreqCount (arr) {
    const freqObj = {};
    arr.forEach((num) => {
        if (num in freqObj) freqObj[num] += 1;
        else freqObj[num] = 1;
    });
    return freqObj;
}

function numToArr(num) {
//     const arr = [];
//     let temp = num;
//     while (temp >= 1) {
//         arr.push(temp % 10);
//         temp = (temp - temp%10) / 10;
//     }
//     return arr;
    return `${num}`.split('').map(Number);
}

console.log(sameFrequency(1822322523, 2812325222));