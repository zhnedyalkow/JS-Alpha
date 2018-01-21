

const recursiveBinarySearch = (arr, key, start, end) => {

    if (start > end) {
        return -1;
    }

    const middleIndex = ((start + end ) / 2) | 0;

    if (arr[middleIndex] > key) {
        return recursiveBinarySearch(arr, key, start, middleIndex - 1);
    } else if (arr[middleIndex] < key) {
        return recursiveBinarySearch(arr, middleIndex + 1, end);
    } 
        return middleIndex;
} 

let recursiveBinary = (arr, key) => 
recursiveBinarySearch(arr, 2, 0, arr.length - 1);

const array = [1, 2, 5, 30, 20, 10];
array.sort();
console.log(array);
console.log(recursiveBinary(array, 2));
