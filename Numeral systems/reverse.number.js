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
    '123.45',

    // '5',
    // '2 1 1 6 3',
];

// 5
// 4 3 2 5 2	

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const input = gets();
const num = 0;
let reverse = '';

for (let i = input.length - 1; i >= 0; i--) {
    reverse += input[i];
}

print(reverse);