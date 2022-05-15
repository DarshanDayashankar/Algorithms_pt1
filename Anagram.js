function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    const str1FreqCtr = {};
    const str2FreqCtr = {};
    if(str1.length !== str2.length) return false;
    else {
        for (let char of str1 ) str1FreqCtr[char] = ( str1FreqCtr[char] || 0) + 1;
        for (let char of str2 ) str2FreqCtr[char] = ( str2FreqCtr[char] || 0) + 1;
        console.log(str1FreqCtr, str2FreqCtr);
        for (let key in str1FreqCtr) {
            if(!(key in str2FreqCtr)) return false;
            else if (!(str1FreqCtr[key] === str2FreqCtr[key])) return false; 
        }
        return true;
    }
  }


  console.log(validAnagram('cat', 'tac'));