const array = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23,
    24, 33, 35, 42, 47];
array.sort();



const interpolationSearch = (arr, n, x) => {
    let lo = 0;
    let hi = (arr.length - 1);

    while (lo <= hi && x >= arr[lo] && x <= arr[hi]) {
        
        const pos = lo + (((hi-lo) /
        (arr[hi]-arr[lo]))*(x - arr[lo]));

        if (arr[pos] === x) {
            return pos;
        }

        if (arr[pos] < x) {
            lo = pos + 1;
        } else {
            hi = pos - 1;
        }
    }
    return - 1;
}

const n = array.length;
const x = 13;
const index = interpolationSearch(array, n, x);

if (index != - 1) {
    console.log(index);
} else {
    return 0;
}