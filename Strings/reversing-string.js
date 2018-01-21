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
    'Zhitomir',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const str = gets();
let output = '';
//---------------------------
// for

for (let i = 0; i < str.length - 1; i++) {
    output = str[i] + output;
    // Z + ''
    // h + Z
    // i + hZ
}

//---------------------------

console.log(output);
// while

// let output = '';

// let i = str.length - 1;
// while (i >= 0) {
//     output += str[i];
//     i--;
// }

// console.log(output);