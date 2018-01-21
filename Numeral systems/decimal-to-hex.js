const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test

const test = [
    '338583669684',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// const hexToDec(hex) {
//     var result = 0, digitValue;
//     hex = hex.toLowerCase();
//     for (var i = 0; i < hex.length; i++) {
//         digitValue = '0123456789abcdefgh'.indexOf(hex[i]);
//         result = result * 16 + digitValue;
//     }
//     return result;
// }

// console.log(hexToDec('FE'));

const n = +gets();

const d2h = () => {
    return (+n).toString(16).toUpperCase();
}

print(d2h());