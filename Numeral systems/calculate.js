const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '4',
    '3',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const x = +gets();
const NUMBER = 1;
let fact = 1;
let calc = 0;
let xProduct = 1;

for (let i = 1; i <= n; i+=1) {
    fact *= i;
    xProduct = Math.pow(x, i);
    calc += fact / xProduct;
}

calc += NUMBER;
print(calc.toFixed(5));