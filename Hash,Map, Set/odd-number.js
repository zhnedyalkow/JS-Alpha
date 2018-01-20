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

    '13',
    '-1',
    '7',
    '7',
    '-9223372036854775808',
    '7',
    '-9223372036854775808',
    '-3',
    '7',
    '0',
    '-1',
    '7',
    '0',
    '-3',

    // '9',
    // '-1',
    // '0',
    // '1',
    // '2',
    // '3',
    // '2',
    // '1',
    // '0',
    // '-1',

    // '3',
    // '2',
    // '-1',
    // '2',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
let map = new Map();
let count = 0;
let str = '';

for (let i = 0; i < n; i++) {
    const number = +gets();
    str += number + ' ';
}

str = str.trim();

const numbers = str.split(' ');
numbers.forEach((num) => {
    count = map.get(num) || 0;
    map.set(num, count + 1);
});


let saveKey;
let isOdd = false;
for (let [key, value] of map.entries()) {
    if (value % 2 !== 0) {
        isOdd = true;
        saveKey = key;
        break;
    }
}

if (isOdd) {
    print(saveKey);
}

// quit(0);