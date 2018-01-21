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
     '2{z10{xy}}',
    // 'a',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const repeatStr = (string, counter) => {
    let text = '';

    for (let i = 0; i < count; i+=1) {
        text += str;
    }

    return text;
}

const getWordsBetweenCurlies = (string) => {
    const results = [];
    const regs = /{([^}]+)}/g;
    let text = '';

    while (text = regs.exec(str)) {
        results.push(text[1]);
    }

    return results;
}


const input = gets();
const arr = [];
let number;
const arrNum = [];
const strArr = [];
let copy = '';
let isDigit = false;

console.log(input);

for (let i = 0; i < input.length; i++) {

        if (Number.isInteger(+input[i])) {

             if (Number.isInteger(+input[i])) {

                if (Number.isInteger(+input[i + 1])) {
                    number = +(input[i]+input[i + 1]);
                    arrNum.push(number);
                    i++;
                } else {
                    number = +input[i];
                    arrNum.push(number);
                }
                
             }

        }

        if (input[i] === '{') {
            arr.push(i);
        } else if (input[i] === '}') {
             copy = input.slice(arr.pop() + 1, i);
            // copy = input.slice(arr.pop() + 1, i);
            console.log(copy);
            // strArr.push(copy);
            // if (getWordsBetweenCurlies(copy) !== '') {
            //     strArr.push(getWordsBetweenCurlies(copy));
            // }
            // console.log(copy);
        }

}

// console.log(arrNum);
console.log(strArr);


