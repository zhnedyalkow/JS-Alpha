
str = 'hi yo whatup bye lol';
const nonSortedArray = str.split(' ');

let sortedArray = nonSortedArray.sort(function (a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }

    return 0;
})

console.log(sortedArray);

// in reverse order 

let reverseSortedArray = nonSortedArray.sort(function (a, b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } 
    return 0;
})

console.log(reverseSortedArray);