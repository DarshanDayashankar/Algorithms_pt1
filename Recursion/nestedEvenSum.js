function nestedEvenSum (obj, evenNum=0) {
    // add whatever parameters you deem necessary - good luck!
    const keys = Object.keys(obj);
    const len = keys.length;
    if ( len === 0) return evenNum;
    else if (len === 1) {
        const value = Object.values(obj)[0];
        if (typeof(value) === 'object' ) return nestedEvenSum(value, evenNum);
        else if (typeof(value) === 'number' && value % 2 === 0) return (value + evenNum);
        else return evenNum;
    }
    else {
        const value = obj[keys[0]];
        delete obj[keys[0]];
        if (typeof(value) === 'object' ) return nestedEvenSum(obj, nestedEvenSum(value, evenNum));
        else if (typeof(value) === 'number' && value % 2 === 0) return nestedEvenSum(obj, value + evenNum);
        else return nestedEvenSum(obj, evenNum);
    }
  }
  
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10