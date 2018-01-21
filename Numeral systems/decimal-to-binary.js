let decimalNumber = +gets();
let binaryNumber = '';
let remainder = 0;

do {
    remainder = Math.floor(decimalNumber % 2);
    decimalNumber = Math.floor(decimalNumber / 2);
    binaryNumber = remainder.toString() + binaryNumber;
} while (decimalNumber > 0);


let str = "" + binaryNumber;
let pad = "00000000"
let ans = pad.substring(0, pad.length - str.length) + str;


print(ans);