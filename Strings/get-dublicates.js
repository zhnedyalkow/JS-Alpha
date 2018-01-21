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

const getDublicates = (array) => {
    let i;
    let value;
    const all = {};
    const dublicates = [];

    for (i = 0; i < array.length; i++) {
        value = array[i];
        if (all[value]) {
            dublicates.push(value);
        } else if (typeof all[value] === 'undefined') {
            all[value] = true;
        }
    }

    return dublicates;
}

console.log(getDublicates(arr));
