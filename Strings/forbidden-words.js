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
    'Microsoft announced its next generation PHP compiler today. It is based on .NET Framework 4.0 and is implemented as a dynamic language in CLR.',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const arr = gets().split(' ');
const forbidden = ['PHP', 'Microsoft', '.NET'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'PHP') {
        arr[i] = arr[i].replace('PHP', '*');
    } else if (arr[i] === 'Microsoft') {
        arr[i] = arr[i].replace('Microsoft', '*');
    } else if (arr[i] === '.NET') {
        arr[i] = arr[i].replace('.NET', '*');
    }
}

console.log(arr.join(' '));