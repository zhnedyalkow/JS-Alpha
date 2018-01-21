const generateVariationsWithouthRep = (n, k, index, variation, used, allVariations) => {
    if (index === k) {
        allVariations.push([...variation]);
        return;
    } 
    
    for (let i = 0; i < n; i++) {
        if (used[i]) { // border case
             continue; // without repetition
             // continue -> with repetition
        }

        variation[index] = i + 1;
        generateVariationsWithouthRep(n, k, index + 1, variation, used, allVariations);
        used[i] = false;
    }
}

const n = 3;
const k = 3; // if n === k -> permutations
const index = 0;
const variation = Array.from({ length: k }); // current variation
const used = Array.from({ length: n }); // current variation
const allVariations = [];


generateVariationsWithouthRep(n, k, 0, variation, used, allVariations);

allVariations.forEach((x) => {
    console.log(x.join(' '));
});



// n - elements
// k
// used
// variation - [] - save current variation
// index = next element
// if k = n - permutations;