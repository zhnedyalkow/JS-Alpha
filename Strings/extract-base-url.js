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
    // 'http://www.sitename.com/article/2009/09/14/this-is-an-article/',
    'http://www.devbg.org/forum/index.php',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const location = gets();

const pathArray = location.split('/');
const protocol = pathArray[0];
const host = pathArray[2];
const resource = '/' + pathArray[3] + '/' + pathArray[4]
const url = protocol + '//' + host;

// const url = location.match(/^(([a-z]+:)?(\/\/)?[^\/]+\/).*$/)[1]; // <-- http://www.devbg.org/
// console.log(url);

console.log(`[protocol] = "${protocol}"`);
console.log(`[server] = "${host}"`);
console.log(`[resource] = "${resource}"`);

