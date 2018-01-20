/* globals Map */

const newMap = new Map()
.set(1, 'one')
.set(2, 'two')
.set(3, 'three');

let arr = [...newMap.keys()];

newMap.forEach((value, key) => {
    console.log(key, value);
})

let newMap1 = new Map(
    [...newMap].filter(([k, v])=> k > 1)
);


console.log(arr);
console.log(newMap1);
const KEY = {};

newMap1.clear();
console.log(newMap1);
// newMap.set(KEY, 123); // add
// console.log(newMap);
// newMap.delete(KEY); // delete
// console.log(newMap);
// newMap.set(KEY, 555);
// console.log(newMap.has(KEY)); // check if exist
// console.log(newMap.get(KEY));
// console.log(newMap.size);