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
    'We are living in an yellow submarine. We dont have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let counter = 0;
const str = gets().split(' ');
const path = 'in';
for (let i = 0; i < str.length; i++) {
    const word = str[i];
    for (let j = 0; j < word.length; j++) {
        if ((word[j] + word [j + 1] ) === path) {
            counter++;
        }
    }
}

console.log(counter);


