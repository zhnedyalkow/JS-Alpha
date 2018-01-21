let array = [64, 25, 12, 22, 11];

const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let j = i;

        while (j > 0 && arr[j] < arr[j - 1]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            j--;
        }
    }
    return array;
}

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    // if (arr.length < 16) {
    //     return insertionSort(arr);
    // }

    const middle = (arr.length / 2) | 0;
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

const merge = (left, right) => {
    let i = 0;
    let j = 0;
    const result = [];

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    return result;
}

console.log(array);
array = mergeSort(array); 
console.log(array);