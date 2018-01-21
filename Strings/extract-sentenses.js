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
    'in',
    'We are living in a yellow submarine. We dont have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const pattern = gets();
const sentenses = gets().split('.');
let word;
const output = [];

for (let i = 0; i < sentenses.length; i++) {
     word = sentenses[i].split(' ');
    for (let j = 0; j < word.length; j++) {
        if (word[j] === pattern) {
            output.push(sentenses[i] + '.');
        }
    }
}

console.log(output.join('').trim('.'));
