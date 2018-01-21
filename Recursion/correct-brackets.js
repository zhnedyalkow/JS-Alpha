const gets = this.gets || function() { return 4; };
const print = this.print || console.log;

const N = +gets() / 2;

const printPair = (str) => {
    const rightParentheses = '(';
    const leftParantheses = ')';
    let rightCount = 0;
    let leftCount = 0;

    for (let i = 0; i <= str.length; i+=1) {
        if (rightParentheses === str.charAt(i)) {
            rightCount+=1;
        } else if (leftParantheses === str.charAt(i)) {
            leftCount+=1;
        }

        if (rightCount === leftCount) {
            return false;
        }
    }

    return rightCount === leftCount;
};

const nPair = (n) => {
    if (n === 0) {
        
        return [''];
    }

    const result = [];
    for (let i = 0; i < n; i+=1) {
        const lefts = nPair(i);
        const rights = nPair(n - i - 1);

        for (let l = 0; l < lefts.length; l+=1) {
            for (let r = 0; r < rights.length; r+=1) {
                result.push('(' + lefts[l] + ')' + rights[r]);
            }
        }
    }

    return result;
};

print(nPair(N));
