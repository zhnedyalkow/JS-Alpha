const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '-1'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
let fact = 1;

for (let i = n; i > 0; i-=1) {
    fact *= i;
}

print(fact);