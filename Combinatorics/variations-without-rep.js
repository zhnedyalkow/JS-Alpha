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


const generateVariationsWithoutRep = (n, k, index, variation, used, allVariations) => {
    if (index === k) {
        allVariations.push([...variation]);
        return;
    }

    for (let i = 0; i < n; i++) {
        if (used[i]) {
            continue;
        }

        variation[index] = i + 1;
        used[i] = true;
        generateVariationsWithoutRep(n, k, index + 1, variation, used, allVariations);
        used[i] = false;
    }

}

const input = gets().split(' ');
const n = +input[0];
const k = +input[1];
const variation = Array.from({ length: k });
const used = Array.from({ length: n });
const allVariations = [];


generateVariationsWithoutRep(n, k, 0, variation, used, allVariations);

allVariations.forEach((x) => {
    console.log(x.join(' '));
});