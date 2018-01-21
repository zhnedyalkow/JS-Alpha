let array = [ -2, -5, 5, -1, 4, 3, -4, -3, 1, 2, 0 ];

const countingSort = (arr, min, max) => {
    const counts = Array.from({ length: max - min + 1}).fill(0);

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
}

console.log(array);
array = countingSort(array, -5, 5);
console.log(array);