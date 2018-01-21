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
    // '44^632^283',
    //'8^1231111',
    //'2^1',
    '2^1',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const str = gets();
let i = 0;
let message = ``;

for (; i >= 0 && i < str.length;) {
    let ch = str[i];
    let num = +str[i];
    if (num % 2 === 0 && num !== 0) {
        i += num;
    } else if (num % 2 === 1) {
        i -= num;
    } else if (num === 0) {
        message = `Too drunk to go on after ${i}!`;
        break;
    } else if (ch === '^') {
        message = `Jump, Jump, DJ Tomekk kommt at ${i}!`;
        break;
    }

    i = i;
}

if (message === '') {
    print(`Fell off the dancefloor at ${i}!`);
} else {
    print(message);
}
