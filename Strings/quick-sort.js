let array = [64, 25, 12, 22, 11];

const getPivotIndex = (arr) => (arr.length / 2) | 0; 

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const pivotIndex = getPivotIndex(arr);
    const pivot = arr[pivotIndex];
    let left = [];
    let right = [];

    for (let i = 0; i < pivotIndex; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    for (let i = pivotIndex + 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    left = quickSort(left);
    right = quickSort(right);

    return [...left, pivot, ...right];
};

array = quickSort(array);
console.log(array);