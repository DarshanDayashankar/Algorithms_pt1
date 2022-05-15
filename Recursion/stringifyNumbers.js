// function stringifyNumbers(obj, keys=Object.keys(obj)) {
//     const len = keys.length;
//     const key = keys[0];
//     const value = obj[key];
//     let tempObj = obj;
//     if ( len === 0) return obj;
//     else if (len === 1) {
//         if (typeof(value) === 'object' ) tempObj = {...obj, [key]: stringifyNumbers(value) };
//         else if (typeof(value) === 'number') tempObj = {...obj, [key]: value.toString() };
//         return tempObj;
//     }
//     else {
//         if (typeof(value) === 'object' ) tempObj = {...obj, [key]: stringifyNumbers(value) };
//         else if (typeof(value) === 'number') tempObj = {...obj, [key]: value.toString() };
//         return stringifyNumbers(tempObj, keys.slice(1));
//     }
// }


function stringifyNumbers(obj, keys=Object.keys(obj)) {
    const len = keys.length;
    if ( len === 0) return obj;
    else {
        const key = keys[0];
        const value = obj[key];
        const tempObj = Object.assign({}, obj);
        if (typeof(value) === 'object' ) tempObj[key] = stringifyNumbers(value);
        else if (typeof(value) === 'number') tempObj[key] = value.toString();
        return stringifyNumbers(tempObj, keys.slice(1));
    }
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));