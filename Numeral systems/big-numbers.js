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
    '5 5',
    '0 3 9 3 2',
    '5 9 5 1 7',	
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets().split(' ').map(Number);
const n = input[0];
const m = input[1];
const arr1 = gets().split(' ').map(Number);
const arr2 = gets().split(' ').map(Number);
const length = Math.max(n, m);
const currentSum = Array.from({length: length}).fill(0);

for (let i = 0; i < length; i++) {
    
    if (typeof arr1[i] === 'undefined') {
        arr1[i] = 0;
    }

    if (typeof arr2[i] === 'undefined') {
        arr2[i] = 0;
    }

    currentSum[i] += arr1[i] + arr2[i];

    if (currentSum[i] >= 10) {
        currentSum[i] -= 10;
        currentSum[i + 1] += 1;
    }

}

print(currentSum.join(' '));