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
    '6',
    '1 2 3 5 7 1',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const arr = gets().split(' ').map(Number);

let i = 0;
const indices = [];
const visited = [];
let result;

while (true) {

    if (i < 0 || i > n) {
        break;
    }

    if (visited[i]) {

        const indexOfIndex = indices.indexOf(i);

        if (typeof indices[indexOfIndex - 1] !== 'undefined') {
            indices[indexOfIndex] = `${indices[indexOfIndex - 1]}(${i}`;
            indices[indexOfIndex - 1] = '';
        } else {
            indices[indexOfIndex] = `(${i}`;
        }

        indices[indices.length - 1] = `${indices[indices.length - 1]})`;
        break;
    }

    indices.push(i);
    visited[i] = true;
    i = arr[i];
}

print(indices.join(' '));
// quit(0);
