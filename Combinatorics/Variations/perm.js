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
  '4',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const getPermutationsWithoutRep = (n, index, currentPerm, used, allPermutations ) => {
    if (index === n) {
        allPermutations.push([...currentPerm]);
        return;
    }

    for (let i = 0; i < n; i++) {

        if (used[i]) {
            continue;
        }

        currentPerm[index] = i + 1;
        used[i] = true;
        getPermutationsWithoutRep(n, index + 1, currentPerm, used, allPermutations);
        used[i] = false;
    }
}


const n = +gets();
const currentPerm = Array.from({ length: n });
const used = Array.from({ length: n });
const allPermutations = [];

 getPermutationsWithoutRep(n, 0, currentPerm, used, allPermutations);

allPermutations.forEach((x) => {
    console.log(x.join(' '));
});

// quit(0)