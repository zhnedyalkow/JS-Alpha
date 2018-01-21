

// // read the input

// // const str = gets().split(' ').map(Number);
// // const n = str[0]; // rows
// // const m = str[1]; // cols
// // const matrx = [];
// // let maxSizeNeighbour = Number.MIN_SAFE_INTEGER;

// // const isPassed = Array(matrx.length).fill().
// //     map((x) => Array(matrx[0].length).fill(0));

// // for (let i = 0; i < n; i+=1) {
// //     const line = gets().split(' ').map(Number);
// //     matrx.push(line);
// // }

// // const findNeighbour = (a, row, col, visited) => {
// //     let rows = n;
// //     let cols = m;

// //     const dx = [-1, 0, 1, 0]; // rows
// //     const dy = [0, 1, 0, -1]; // cols
  

// //     const numberToCheck = a[row][col];
// //     let depth = 1;
// //     // visited[row][col] = true;

// //     for (let i = 0; i < dx.length; i+=1) {
// //         const yy = col + dy[i]; // cols
// //         const xx = row + dx[i]; // rows

// //         if (xx >= 0 && yy >=0 && xx < rows && yy < cols) {
// //             if ((!visited[xx][yy] )&& (a[xx][yy] === numberToCheck)) {
// //                 visited[xx][yy] = true;
// //                 depth += findNeighbour(a, row, col, visited);
// //             }
// //         }
// //     }

// //     return depth;
// // }

// // // ----------------------------------------------------

// // // engine

// // for (let i = 0; i < n; i+=1) {
// //     for (let j = 0; j < m; j+=1) {
// //          const localMax = findNeighbour(matrx, i, j, isPassed);
// //          maxSizeNeighbour = Math.max(maxSizeNeighbour, localMax);
// //     } 
// // }

// //  print(maxSizeNeighbour);




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
 '5 6',
 '1 3 2 2 2 4',
 '3 3 3 2 4 4',
 '4 3 1 2 3 3',
 '4 3 1 3 3 1',
 '4 3 3 3 1 1',	
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// -------------------------------------------

const str = gets().split(' ').map(Number);
const n = str[0]; // rows
const m = str[1]; // cols
const matrix = [];

for (let i = 0; i < n; i+=1) {
    const line = gets().split(' ').map(Number);
    matrix.push(line);
}

const visited = Array(matrix.length).fill().
    map((x) => Array(matrix[0].length).fill(0));

const depthFirstSearch = (a, row, col, passed) => {
    let result = 1;
    passed[row][col] = true;
    let len = a.length;
    // up
        if (((row - 1) >= 0 && (a[row - 1][col] === a[row][col]) &&
        !passed[row - 1][col])) {
            result += depthFirstSearch(a, row - 1, col, passed);
        }

    // down
        if ((row + 1) < len && (a[row + 1][col] === a[row][col]) && 
        !passed[row + 1][col]) {
            result += depthFirstSearch(a, row + 1, col, passed);
        }

    // left
        if ((col - 1) >= 0 && (a[row][col - 1] === a[row][col]) &&
        !passed[row][col - 1]) {
            result += depthFirstSearch(a, row, col - 1, passed);
        }

    // right
        if (((col + 1) <= len && (a[row][col] === a[row][col + 1]) &&
        !passed[row][col + 1])) {
            result += depthFirstSearch(a, row, col + 1, passed);
        }

        return result;
};

// console.log(matrix);

let best = 0;

for (let i = 0; i < n; i+=1) {
    for (let j = 0; j < m; j+=1) {
         const count = depthFirstSearch(matrix, i, j, visited);
         best = Math.max(best, count);
    } 
}
print(best);
// quit(0);
