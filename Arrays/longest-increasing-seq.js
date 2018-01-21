
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
'8',
'7',
'3',
'2',
'3',
'5',
'2',
'2',
'4',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const n = +gets();
 const arr = [];

 for (let index = 0; index <= n - 1; index+=1) {
     arr[index] = +gets();
 }

let maxLen = 0;
let len = 1;

    for (let i = 0; i < arr.length - 1; i+=1) {

         if ((arr[i]) < arr[i+1]) {
            len += 1;
            if (len > maxLen) {
                maxLen = len;
            }
        } else {
            len = 1;
        }
    }
    print(maxLen);
