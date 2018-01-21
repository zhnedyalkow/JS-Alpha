
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
    '10',
    '2',
    '1',
    '1',
    '2',
    '3',
    '3',
    '2',
    '2',
    '2',
    '1',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
 const arr = [];

 for (let index = 0; index <= n - 1; index+=1) {
     arr[index] = +gets();
 }

let maxLen = 0;
let len = 1;

    for (let i = 0; i < arr.length - 1; i+=1) {

        if (arr[i] === arr[i + 1]) {
            len += 1;
            if (len > maxLen) {
                maxLen = len;
            }
            
        } else {
            len = 1;
        }
    }
    print(maxLen);

// const arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
// let maxLen = 0;
// let len = 1;
// const gets = this.gets || getGets(arr);
// const print = this.print || console.log;

//     for (let i = 0; i < arr.length - 1; i+=1) {

//         if (arr[i] === arr[i + 1]) {
//             len += 1;
//             if (len > maxLen) {
//                 maxLen = len;
//             }
//         } else {
//             len = 1;
//         }
//     }
//     print(maxLen);

// judge


// const maxSequenceOfEq = () => {
//     let maxCount = 0;
//     let count = 1;
//     const n = +gets();
//     const arr = [];

//     for (let i = 0; i < n; i++) {
//         let line = +gets();
            // arr.push(line);
//     }

//     for (let i = 0; i < arr.length - 1; i+=1) {

//         if (arr[i] === arr[i + 1]) {
//             count += 1;
//         } else {
//             count = 1;
//         }
    
//         if (count > maxCount) {
//             maxCount = count;
//         }
//     }
//     return maxCount;
// };


// console.log(maxSequenceOfEq());