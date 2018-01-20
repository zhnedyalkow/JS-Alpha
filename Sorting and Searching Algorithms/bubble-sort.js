Math.randomInt = (min, max) => Math.trunc(Math.random() * (max - min)) + min;

const generateRandomArray = (min, max) => {
    const result = [];
    for (let i = min; i < max; i++) {
        result.push(i);
    }

    for (let i = 0; i < result.length - 1; i++) {
        const randomIndex = Math.randomInt(i + 1, result.length);
        [result[randomIndex], result[i]] = [result[i], result[randomIndex]];
    }

    return result;
}


const bubbleSort = (arr) => {
    let isSwapDone = false;

    while (!isSwapDone) {
        isSwapDone = true;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] < arr[i]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                isSwapDone = false;
            }
        }
    }
}

 const arr = generateRandomArray(1, 10);
 console.log(arr);
 bubbleSort(arr);
 console.log(arr);