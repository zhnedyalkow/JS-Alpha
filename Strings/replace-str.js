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
    '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const str = gets().split(' ');
console.log(str);

for (let i = 0; i < str.length; i++) {
    if ((str[i] + str[i + 1]) === '') {
        
    }
    
}
