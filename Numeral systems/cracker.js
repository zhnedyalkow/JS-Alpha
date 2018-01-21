const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '100000',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const mile = +gets();
const COEF = 1609;

const numInMeters = mile * COEF;
print(numInMeters);