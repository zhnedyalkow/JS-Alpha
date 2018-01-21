
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
    '14',
    '2 1 2 4 3 5 2 6',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const s = +gets();
let arr = [];
const numbers = [];
const inputStr = gets();
arr = inputStr.split(' ');

for (let i = 0; i < arr.length - 1; i+=1) {
    numbers[i] = +arr[i];
}

const sums = Array.from({
    length: s + 1,
})
.fill(false);

sums[0] = true;

for (const number of numbers) {
    for (let sum = s; sum >= 0; sum-=1) {
        if (sums[sum]) {
        const newSum = sum + number;
        if (newSum > s) {
            continue;
            }
            sums[newSum] = true;
        }
    }
}

if (sums[s] === true) {
    print('yes');
} else {
    print('no');
}