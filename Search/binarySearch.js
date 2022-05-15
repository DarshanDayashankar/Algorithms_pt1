function binarySearch(arr, value, left=0, right=arr.length-1){
    // add whatever parameters you deem necessary - good luck!
    if(left === right && value === arr[left]) return left;
    else if ((left+1) === right) {
        if (arr[left] === value) return left;
        else if(arr[right] === value) return right;
    }
    else if (left < right) {
        const mid = Math.floor((left + right+1)/2);
        if (value < arr[mid] ) return binarySearch(arr, value, left, mid-1);
        else if (value > arr[mid]) return binarySearch(arr, value, mid+1, right);
        else return mid;
    }
    return -1;
  }


//   console.log(binarySearch([2], 2));
//   console.log(binarySearch([2,3], 2));
//   console.log(binarySearch([1,2], 2));
//   console.log(binarySearch([], 2));
  console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13], 3));