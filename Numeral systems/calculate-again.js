const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '8',
    '3',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const k = +gets();
let fact = 1;
let kFact = 1;
let calc = 0;


for (let i = 1; i <= n; i+=1) {
    fact *= i;
}

for (let j = 1; j <= k; j+=1) {
    kFact *= j;
}

calc = fact / kFact;
print(calc);