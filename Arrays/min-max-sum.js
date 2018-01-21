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
    '1',
    '5 2',
    '7 2 5 10 8',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const number = +gets();
const str = gets().split(' ').map(Number);
const arr = gets().split(' ').map(Number);
const m = str[0];
const g = str[1];

let maxSumSoFar = 0;
let maxISoFar = 0;
let maxJSoFar = -1;

for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (sum > maxSumSoFar) {
            maxSumSoFar = sum;
            maxISoFar = i;
            maxJSoFar = j;
        }
    }
    
}

console.log(maxSumSoFar);








// let sum = 0;
// let f = 0;
// let s = 0;
// let min = Number.MAX_SAFE_INTEGER;


// const minSum = (a) => {
//     let i;
//     for (i = 0; i < a.length - 1; i++) {
//         f += a[i];
//         let j = i + 1;
//         let k = i;

//         for (; j < a.length; j++) {
//             s += a[j];
//         }

//         if (s === a[a.length - 1]) {
//             continue;
//         }

//         min = Math.min(s, min);
//         s = 0;
//     }

//     sum = Math.min(f, min);

//     return sum;
// }

// console.log(minSum(arr));







// const number = +gets();
// const str = gets().split(' ').map(Number);
// const arr = gets().split(' ').map(Number);
// const m = str[0];
// const g = str[1];

// let sum = 0;
// const s = [];

// for (let i = 0; i < arr.length - 1; i++) {
//     let j = i + 1;
//     for ( ; j < arr.length; j++) {
//         sum += arr[j];
//     }

//     if (sum === arr[arr.length - 1]) {
//         continue;
//     }
//     s.push(sum);
//     sum = 0;
// }

// for (let i = arr.length - 1; i >= 0; i--) {
//     let j = i - 1;
//     for ( ; j >= 0; j--) {
//         sum += arr[j];
//     }
//     s.push(sum);
//     break;
// }
// print(Math.min(...s ));