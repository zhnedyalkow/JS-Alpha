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
    'hello',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const str = gets();
const len = str.length;

if (len < 20) {
    let output = '';
    output = '*'.repeat(20 - len);
    output = str + output;
}

console.log(output);