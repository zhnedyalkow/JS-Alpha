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
    //'2{z10{xy}}',
    'Some random {stuff} in this {sentence}',
    //Some random {stuff} in this {sentence}
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const str = gets();

const getWordsBetweenCurlies = (string) => {
    const results = [];
    let regs = /{([^}]+)}/g;
    let text = '';

    while (text = regs.exec(str)) {
        results.push(text[1]);
    }

    return results;
}


 console.log(getWordsBetweenCurlies(str));