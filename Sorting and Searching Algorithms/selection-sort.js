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


const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let bestIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[bestIndex] > arr[j]) {
                bestIndex = j;
            }
        }

        if (bestIndex !== i) {
            [arr[bestIndex], arr[i]] = [arr[i], arr[bestIndex]];
        }
    }
};

// console.log(Math.randomInt(1, 5));

 // console.log(Math.trunc(-3.5));
const arr = generateRandomArray(1, 10);
// const arr2 = generateRandomArray(1, 10);
// const arr3 = generateRandomArray(1, 10);
// const arr4 = generateRandomArray(1, 10);
console.log(arr);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

 selectionSort(arr);
 console.log(arr);