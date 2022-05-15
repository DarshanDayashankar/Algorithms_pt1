console.log(reverse("dars"));


function reverse(str) {
    const length = str.length;
    if(length === 0) return '';
    else if(length === 1) return str;
    else {
        return str[length-1] + reverse(str.slice(1, length-1)) + str[0];
    }
}