const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '3',
    '2',
    '5',
    '1',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const arr = [];
let sum = 0;
let avg = 0;
for (let i = 0; i < n; i++) {
    arr.push(+gets());
    sum += arr[i];
}

avg = sum / arr.length; 
print(`min=${Math.min(...arr).toFixed(2)}`);
print(`max=${Math.max(...arr).toFixed(2)}`);
print(`sum=${sum.toFixed(2)}`);
print(`avg=${avg.toFixed(2)}`);


// max=5.00
// sum=8.00
// avg=2.67