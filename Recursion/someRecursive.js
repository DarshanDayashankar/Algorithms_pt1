function someRecursive(arr, callBack){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length === 0) return false;
    if(arr.length === 1) return callBack(arr[0]);
    else {
        return (callBack(arr[0]) || someRecursive(arr.slice(1, arr.length-1), callBack) || callBack(arr[arr.length-1]))
    }
  }