function collectStrings (obj, arr=[]) {
    // add whatever parameters you deem necessary - good luck!
    const keys = Object.keys(obj);
    const len = keys.length;
    if ( len === 0) return arr;
    else if (len === 1) {
        const value = Object.values(obj)[0];
        if (typeof(value) === 'object' ) return collectStrings(value, arr);
        else if (typeof(value) === 'string') {
            arr.push(value);
            return arr;
        }
        else return arr;
    }   
    else {
        const value = obj[keys[0]];
        delete obj[keys[0]];
        if (typeof(value) === 'object' ) return collectStrings(obj, collectStrings(value, arr));
        else if (typeof(value) === 'string') {
            arr.push(value);
            return collectStrings(obj, arr);
        }
        else return collectStrings(obj, arr);
    }
  }