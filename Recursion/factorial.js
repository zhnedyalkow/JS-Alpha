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
  '6'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// recursive

// const n = +gets();

// const fact = (n) => {
//     if (n === 0 || n === 1) {
//         return 1;
//     }

//     return n * fact(n - 1);
// }

// console.log(fact(n));


const n = +gets();

const fact = (n) => {
    
    let res = 1;

    for (let i = 1; i <= n; i+=1) {
        res *= i;
    }

    return res;
}

print(fact(n));
quit(0);