function capitalizeWords (arr) {
    // add whatever parameters you deem necessary - good luck!
      const len = arr.length;
      if (len === 0) return [];
      else if (len === 1) return [capitilizeWord(arr[0])];
      else {
          return [ capitilizeWord(arr[0]), ...capitalizeWords(arr.slice(1,len-1)), capitilizeWord(arr[len-1]) ];
      }
  }
  
  function capitilizeWord (str) {
      return str.toUpperCase();
  }