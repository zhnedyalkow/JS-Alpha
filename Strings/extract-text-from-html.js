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
    '<html><head><title>News</title></head>',
    '<body><p><a href="http://academy.telerik.com">Telerik Academy</a>aims to provide free real-world practical training for young people who want to turn into skilful .NET software engineers.</p></body></html>',
    //'<b>Bob</b>, Im <b>20</b> years old, I like <b>programming</b>.',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let str;
let res = [];
for (let i = 0; i < 2; i++) {
     str = gets();
     res.push(str.replace(/<[^>]+>/g, ''));
}

console.log(res.join(' '));