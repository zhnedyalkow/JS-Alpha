const arr = [64, 25, 12, 22, 11];
console.log(arr);

const bubleSort = (array) => {

    let isSwapDone = false;

    while (!isSwapDone) {
        isSwapDone = true;

        for (let i = 0; i < array.length; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                isSwapDone = false;
            }
        }
    }

    return array;
}

console.log(bubleSort(arr));