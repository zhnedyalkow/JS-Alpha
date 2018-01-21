const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '10',
    '2',
    '3',
    '-6',
    '-1',
    '2',
    '-1',
    '6',
    '4',
    '-8',
    '8',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const arr = [];

for (let index = 0; index < n; index++) {
    arr.push(+gets());
}

let bestSum = arr[0];

for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
     for (let j = i; j < arr.length; j++) {
        currentSum += arr[j];
        
        if (currentSum > bestSum) {
            bestSum = currentSum;
        }
     }
}

print(bestSum);