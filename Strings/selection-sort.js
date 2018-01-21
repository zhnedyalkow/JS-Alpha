const arr = [64, 25, 12, 22, 11];

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         console.log(arr);
//         if (arr[i] > arr[j]) { // swap
//             const tmp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = tmp;
//         }
//         console.log(arr);
//     }
// }


const selectionSort = (array) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let best = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[best]) {
                best = j;
            }
        }
        if (best !== i) {
            [arr[i], arr[best]] = [arr[best], arr[i]];
        }
    }

    return array;
}

console.log(selectionSort(arr));

