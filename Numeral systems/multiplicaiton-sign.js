const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '2',
    '5',
    '2',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let x = +gets();
let y = +gets();
let z = +gets();

if (x > 0 && y > 0 && z > 0) {
    print('+');
} else if (x === 0 && y === 0 && z === 0) {
    print('0');
} else if (x < 0 && y < 0 && z < 0) {
    print('-');
} else if (x > 0 && y < 0 && z < 0) {
    print('+');
} else if (x < 0 && y < 0 && z > 0) {
    print('+');
} else if (x < 0 && y > 0 && z < 0) {
    print('+');
} else {
    print('-');
}