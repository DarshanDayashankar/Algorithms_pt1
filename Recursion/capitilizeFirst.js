function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    const len = arr.length;
    if (len === 0) return [];
    else if (len === 1) return [capitilizeFirstLetter(arr[0])];
    else {
        return [ capitilizeFirstLetter(arr[0]), ...capitalizeFirst(arr.slice(1,len-1)), capitilizeFirstLetter(arr[len-1]) ];
    }
  }
  
  function capitilizeFirstLetter(str) {
      return str[0].toUpperCase()+str.slice(1);
  }
  