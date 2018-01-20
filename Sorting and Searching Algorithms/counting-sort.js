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
};

const countingSort = (arr, min, max) => {
    const counts = Array.from({
        length: max - min + 1,
    }).fill(0);

    for (let i = 0; i < arr.length; i++) {
        const correctCountsIndex = arr[i] - min;
        counts[correctCountsIndex]+=1;
    }

    const result = [];

    for (let i = 0; i < counts.length; i++) {
        let j = counts[i];
        while (j > 0) {
            result.push(i + min);
            j--;
        }
    }

    return result;
};

let arr = generateRandomArray(-5, 6);
console.log(arr);

arr = countingSort(arr, -5, 5);
console.log(arr);
