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
  '4 4',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const getPermutationsWithoutRep = (n, k, index, currentPerm, used, allPermutations ) => {
    if (index === k) {
        allPermutations.push([...currentPerm]);
        return;
    }

    for (let i = 0; i < n; i++) {

        currentPerm[index] = i + 1;
        used[i] = true;
        getPermutationsWithoutRep(n, k, index + 1, currentPerm, used, allPermutations);
        used[i] = false;
    }
}


const input = gets().split(' ');
const n = +input[0];
const k = +input[1];
const currentPerm = Array.from({ length: k });
const used = Array.from({ length: n });
const allPermutations = [];

 getPermutationsWithoutRep(n, k, 0, currentPerm, used, allPermutations);

allPermutations.forEach((x) => {
    console.log(x.join(' '));
});