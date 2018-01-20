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
let res = 0;

for (let i = 0; i < n; i++) {
    const num = +gets();
    res ^= num;
}
print(res);
