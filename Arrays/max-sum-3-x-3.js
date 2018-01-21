
    // 3 3
    // 4 3 5
    // 2 6 4
    // 8 2 7

    let numberOfArguments = 0;

    const gets = function() {

        if (numberOfArguments === 0) {
            numberOfArguments = 1;
            return '3 3';
        } else if(numberOfArguments === 1) {
            numberOfArguments = 2;
            return '4 3 5';
        } else if(numberOfArguments === 2) {
            numberOfArguments = 3;
            return '2 6 4';
        } else if(numberOfArguments === 3) {
            return '8 2 7';
        }
    };


    // const gets = function() {
        
    //             if (numberOfArguments === 0) {
    //                 numberOfArguments = 1;
    //                 return '5 5';
    //             } else if(numberOfArguments === 1) {
    //                 numberOfArguments = 2;
    //                 return '1 1 3 3 5';
    //             } else if(numberOfArguments === 2) {
    //                 numberOfArguments = 3;
    //                 return '-6 -7 2 -3 -1';
    //             } else if(numberOfArguments === 3) {
    //                 numberOfArguments = 4;
    //                 return '3 0 -4 5 9';
    //             } else if(numberOfArguments === 4) {
    //                 numberOfArguments = 5;
    //                 return '7 -7 0 1 0';
    //             } else if(numberOfArguments === 5) {
    //                 return '-7 -6 -4 -4 9';
    //             }
    //         };

const inputNM = gets(); // 3 3
const inputArr = inputNM.split(' ');
console.log(inputArr);

const n = inputArr[0];
const m = inputArr[1];
let lines = '';
const matrix = [];

for (let row = 0; row < n; row++) {
    lines = gets(); 
    matrix[row] = lines.split(' ').map((element) => parseInt(element, 10));
    //matrix[row] = lines.split(' ');
}

// console.log(matrix);


let maxSum = -123456;

for (let row = 0; row < matrix.length - 2; row+=1) {
    for (let col = 0; col < matrix[row].length - 2; col+=1) {

        // const currentSum = +matrix[row][col] + +matrix[row][col+1] + 
        // +matrix[row][col+2] + +matrix[row+1][col] + +matrix[row+1][col+1] + +matrix[row+1][col+2] + 
        // +matrix[row+2][col] + +matrix[row+2][col+1] + +matrix[row+2][col+2];

        const currentSum = matrix[row][col] + matrix[row][col+1] + 
        matrix[row][col+2] + matrix[row+1][col] + matrix[row+1][col+1] + matrix[row+1][col+2] 
        + matrix[row+2][col] + matrix[row+2][col+1] + matrix[row+2][col+2];
        // maxSum += matrix[row][col];
         // console.log(`current sum: ${currentSum}`);
        maxSum = Math.max(maxSum, currentSum);
    }
}


 console.log(maxSum);
//console.log(`maxSum: ${maxSum}`);




