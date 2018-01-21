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
    '6 6',
    '92 11 23 42 59 48',
    '09 92 23 72 56 14',
    '17 63 92 46 85 95',
    '34 12 52 69 23 95',
    '26 88 78 71 29 95',
    '26 34 16 63 39 95',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

[n, m] = gets().split(' ').map(Number);
const matrix = [];
let lines = '';

for (let i = 0; i < n; i++) {
    lines = gets();
    matrix[i] = lines.split(' ').map((el) => parseInt(el, 10));
}


// -------------------- Check the element horisontally---------------------//
// 92 11 23 42 59 48
// 09 92 23 72 56 14
// 17 63 92 46 85 95
// 34 12 52 69 23 95
// 26 88 78 71 29 95
// 26 34 16 63 39 95

let maxCounter = 0;
let counter = 1;

for (let row = 0; row < n; row += 1) {
    for (let col = 0; col < m - 1; col += 1) {
        if (matrix[row][col] === matrix[row][col + 1]) {
            counter += 1;
            maxCounter = Math.max(counter, maxCounter);
        } else {
            counter = 1;
        }
    }
    counter = 1;
}

counter = 1;

// -------------------- Check the element vertically---------------------//

for (let col = 0; col < m; col += 1) {
    for (let row = 0; row < n - 1; row += 1) {
        if (matrix[row][col] === matrix[row + 1][col]) {
            counter += 1;
            maxCounter = Math.max(counter, maxCounter);
        } else {
            counter = 1;
        }
    }
    counter = 1;
}

counter = 1;

// ------------------ Check the element under main diagonal----------------//

for (let row = 0; row < n - 1; row += 1) {
    const rowCount = row; // save row
    for (let col = 0; col < m - 1 && row < n - 1; col += 1, row +=1) {
        if (matrix[row][col] === matrix[row + 1][col+1]) {
            counter += 1;
            maxCounter = Math.max(counter, maxCounter);
        } else {
            counter = 1;
        }
    }
    row = rowCount;
}

counter = 1;

// ------------------ Check the element over main diagonal----------------//

for (let row = 0, col = 0; row < n - 1 && col < m - 1; col += 1) {
    const colCount2 = col; // save row
    for (; col < m - 1 && row < n - 1; col += 1, row +=1) {
        if (matrix[row][col] === matrix[row + 1][col+1]) {
            counter += 1;
            maxCounter = Math.max(counter, maxCounter);
        } else {
            counter = 1;
        }
    }
    row = 0;
    col = colCount2;
}
counter = 1;

// ------------------ Check the element under reverse diagonal----------------//

for ( let row = 0; row < n - 1; row += 1) {
    const rowCount3 = row;
    for ( let col = m - 1; col > 0 && row < n - 1; col -= 1, row += 1) {
        if (matrix[row][col] === matrix[row + 1][col - 1]) {
            counter += 1;
            maxCounter = Math.max(counter, maxCounter);
        } else {
            counter = 1;
        }
    }
    row = rowCount3;
}
counter = 1;

// ------------------ Check the element over reverse diagonal----------------//

for ( let row = 0, col = m - 1; row < n - 1 && col > 0; col -= 1 ) {
    const saveCol = col;
    for (; col > 0 && row < n - 1; col -= 1, row += 1) {
        if (matrix[row][col] === matrix[row + 1][col - 1]) {
            counter += 1;
            maxCounter = Math.max(counter, maxCounter);
        } else {
            counter = 1;
        }
    }
    row = 0;
    col = saveCol;
}

 console.log(maxCounter);
//  print(maxCounter);
//  quit(0);