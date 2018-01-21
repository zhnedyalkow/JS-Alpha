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
    'CLR',
    '.NET',
    'NAMESPACE'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets();
const map = new Map();

map.set('.NET', 'platform for applications from Microsoft');
map.set('CLR', 'managed execution environment for .NET');
map.set('NAMESPACE', 'hierarchical organization of classes');

// console.log(map.keys());

console.log('Enter word to see explanation: ');

console.log(map.get(input));
