const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '3',
    '1 1 2',
    //'18790314',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const arr = gets().split(' ').map(Number);

const getUnique = (array) => {
   const unique = [...new Set(array)];

   return unique;
}

console.log(getUnique(arr));