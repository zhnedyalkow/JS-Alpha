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
    '2',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const N = +gets();
const temp = [];
const m = [];

for (let q = 0; q < N; q += 1) {
    m.push([]);
}

let row = 0;
let col = 0;
const move = (dir) => {
    switch (dir) {
        case 1:
            col += 1;
            break;
        case 2:
            row += 1;
            break;
        case 3:
            col -= 1;
            break;
        case 4:
            row -= 1;
            break;
        default:
            break;
    }
};


let dir = 1;
let jumpLimit = N;
let counter = 0;

for (let i = 1, jump = 1; i <= N * N; i += 1, jump += 1) {
    m[row][col] = i;
    if (jump === N) {
        jumpLimit -= 1;
        jump = 0;
        dir += 1;

    } else if (jump === jumpLimit) {
        counter += 1;
            dir += 1;
            jump = 0;
            if (counter === 2) {
                counter = 0;
                jumpLimit -= 1;
                jump = 0;
            }
    }
    if (dir === 5) {
        dir = 1;
    }
    move(dir);
}

for ( const i of m) {
    print(i.join(' '));
}
