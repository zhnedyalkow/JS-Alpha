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

// read the input

const str = gets().split(' ').map(Number);
const n = str[0]; // rows
const m = str[1]; // cols
const matrix = [];
let best = 0;

for (let i = 0; i < n; i+=1) {
    const line = gets().split(' ').map(Number);
    matrix.push(line);
}

const visited = Array(matrix.length).fill().
    map((x) => Array(matrix[0].length).fill(0));

    // console.log(matrix);
    // console.log();
    // console.log(visited);

    // '1 3 2 2 2 4',
    // '3 3 3 2 4 4',
    // '4 3 1 2 3 3',
    // '4 3 1 3 3 1',
    // '4 3 3 3 1 1',	


    const bfs = (a, row, col, passed) => {
        let queue = [];
        let current;
        let result = 1;
        const len = a.length;

        queue.push(a[row][col]);
        passed[row][col] = true;
        
        while (queue.length > 0) {
            current = queue.shift();
            // current = queue.pop();

            // up

            if ((row - 1 >= 0) && (current === a[row - 1][col]) &&
            (!passed[row - 1][col])) {
               result += bfs(a, row - 1, col, passed);
               
               //passed[row - 1][col] = true;
            }

            // down

            if ((row + 1 < len) && (current === a[row + 1][col]) &&
            (!passed[row + 1][col])) {
                result += bfs(a, row + 1, col, passed);
               //passed[row + 1][col] = true;
            }

            // left

            if ((col - 1 >= 0) && (current === a[row][col - 1]) &&
            (!passed[row][col - 1])) {
                result += bfs(a, row, col - 1, passed);
               // passed[row][col - 1] = true;
            }

            // right

            if ((col + 1 < len) && (current === a[row][col + 1]) &&
            (!passed[row][col + 1])) {
                result += bfs(a, row, col + 1, passed);
               // passed[row][col + 1] = true;
            }
        }

        return result;
    }


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const count = bfs(matrix, i, j, visited);
            best = Math.max(count, best);
        }
    }

print(best);
