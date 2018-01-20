const recursiveBinarySearch = (arr, key, start, end) => {
    if (start > end) {
        return -1;
    }

    const middleIndex = ((start + end) / 2) | 0;
    
    if (arr[middleIndex] > key) {
        return recursiveBinarySearch(arr, key, start, middleIndex - 1);
    } else if (arr[middleIndex] < key) {
        return recursiveBinarySearch(arr, middleIndex + 1, end);
    }

    return middleIndex;
};

const arr = [1, 2, 5, 30, 20, 10];
arr.sort();

let recursiveBinary = (arr, key) => 
recursiveBinarySearch(arr, 2, 0, arr.length - 1);

console.log(recursiveBinary(arr, 2));