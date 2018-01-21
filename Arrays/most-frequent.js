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
'4',
'1',
'1',
'4',
'2',
'3',
'4',
'4',
'1',
'2',
'4',
'9',
'3',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const N = +gets();
let mostFrequentNumber = 0;
let maxCount = +1;
const arr = [];
for (let i = 0; i < N; i++) {
    const index = +gets();
    if (arr[index] === undefined) {
        arr[index] = +1;
    } else {
        arr[index] += 1;
    }
    if (arr[index] > maxCount) {
        maxCount = arr[index];
        mostFrequentNumber = index;
    }
}
print(mostFrequentNumber + ' (' + maxCount + ' times)')








// let maxCount = 0;
// let count = 1;
// let number = 0;
// const gets = this.gets || getGets(arr);
// const print = this.print || console.log;

//     for (let i = 0; i < arr.length - 1; i+=1) {

//         if (arr[i] === arr[i + 1]) {
//             count += 1;
//             number = arr[i];
//         } else {
//             count = 1;
//         }

//         if (count > maxCount) {
//             maxCount = count;
//         }
//     }
//     print(`${number} (${maxCount} times)`);
