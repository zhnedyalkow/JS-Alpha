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
  '4 3',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const generateCombinationsWithoutRep = (n, k, index, combination, allCombinations) => {
    if (index === k) {
        allCombinations.push([...combination]); // when index === k push all values from combination in allCombinations
        return;
    }

    const start = index ? combination[index - 1] : 1; // + 1 when we need combinations without repetition
    for (let i = start; i <= n; i++) {
        combination[index] = i;
        generateCombinationsWithoutRep(n, k, index + 1, combination, allCombinations);
    }
}

const input = gets().split(' ');
const n = +input[0];
const k = +input[1];
const combination = Array.from({ length: k });
const allCombinations = [];

generateCombinationsWithoutRep(n, k, 0, combination, allCombinations);

allCombinations.forEach((elements) => {
    print(elements.join(' '));
});

// quit(0);