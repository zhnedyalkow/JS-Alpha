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
    '6',
    '-26 -25 -28 31 2 27',
];

// 1010 10111100110111101111

// = parseInt(hex, 16).toString(2);


const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const number = gets().split(' ').map((Number));
console.log(number);

// const number = gets().split(' ').map((element) => {
//     parseInt(element, 10);
// });

// const number = [];

// for (let index = 0; index < n; index++) {
//     number.push(+arr[index]);
// }

let largestIndex = 0;
const negative = -1;
for (let i = 1; i < number.length - 1; i++) {
    if (number[i-1] < number[i] && number[i] > number[i+1]) {
        largestIndex = i;
        break;
    } 
}

if (largestIndex !== 0) {
    print(largestIndex);
} else {
    print(negative);
}

