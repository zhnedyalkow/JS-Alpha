// const fibonacci = (n) => {
//     if (n === 1 || n === 2) {
//         return 1;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// optiomization

const fib = [0, 1, 1];
const fibonacci = (n) => {
    if (typeof fib[n] === 'undefined') {
        fib[n] = fibonacci(n-1) + fibonacci(n-2);
    }
    return fib[n];
}


console.log(fibonacci(30));