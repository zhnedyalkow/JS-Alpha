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
    'C# is not C++, not PHP and not Delphi!',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const words = gets().split(' ');
let arr = [];

for (let i = words.length - 1; i >= 0; i--) {
    arr.push(words[i]);
}

print(arr.join(' '));