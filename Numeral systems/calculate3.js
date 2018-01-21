const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '5',
    '2',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const k = +gets();

let factorialNK = 1;
let dividerFactorial = 1;
let calc = 0;

for (let i = n; i > k; i-=1) {
    factorialNK *= i;
}

for (let j = 2; j <= (n - k); j+=1) {
    dividerFactorial *= j;
}

calc = factorialNK / dividerFactorial;

 print(calc);