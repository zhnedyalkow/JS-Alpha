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
