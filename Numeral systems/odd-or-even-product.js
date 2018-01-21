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
    '5',
    '4 3 2 5 2',

    // '5',
    // '2 1 1 6 3',
];

// 5
// 4 3 2 5 2	

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const n = +gets();
const input = gets();
const numbers = [];
const inputNum = input.split(' ');

for (const number of inputNum) {
    numbers.push(+number);
}
console.log(numbers);
let oddSum = 1;
let evenSum = 1;


for (let position = 0; position < numbers.length; position += 1) {

    if (position % 2 === 0) {
        evenSum *= numbers[position];
    } else {
        oddSum *= numbers[position];
    }
}

let equalSum = 0;
if (evenSum === oddSum) {
    equalSum = evenSum;
    print(`yes ${equalSum}`);
} else {
    if (evenSum > oddSum) {
        print(`no ${evenSum} ${oddSum}`);
    } else {
        print(`no ${oddSum} ${evenSum}`);
    }
}

// console.log(evenSum);
// console.log(oddSum);