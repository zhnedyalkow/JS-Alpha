const generateCombinationsWithoutRep = ( n, k, index, combination, allCombinations ) => {
    // const generateCombinationsWithoutRep = ( n, k, index, combination, allCombinations, rep ) => {
    if (index === k) {
        allCombinations.push([...combination]); // <- if without only one combination
        return;
    }

    
    const start = index ? combination[index - 1] + 1 : 1; // <- check here
    // const addition = rep ? 1 : 0 
    // const start = index ? combination[index - 1] + addition : 1; // <- check here
    // with combinations const start = index ? combination[index - 1] : 1;
    for (let i = start; i <= n; i+=1) {
        combination[index] = i;
        generateCombinationsWithoutRep(n, k, index + 1, combination, allCombinations);
    }
}

const n = 5;
const k = 3;
const combination = Array.from({ length: k });
const allCombinations = [];

generateCombinationsWithoutRep(n, k, 0, combination, allCombinations);
// generateCombinationsWithoutRep(n, k, 0, combination, allCombinations, true); 
allCombinations.forEach((x) => {
    console.log(x.join(' '));
});