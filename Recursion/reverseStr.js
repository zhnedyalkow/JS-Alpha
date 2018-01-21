const reverseStr = (str) => {

    if (str.length === 0) {
        return str;
    }

    const reverse = reverseStr(str.substr(1))+str[0];

    return reverse;
}

console.log(reverseStr('bala'));
// bala
// ala + b
// la + ba
// a + bal
// bala