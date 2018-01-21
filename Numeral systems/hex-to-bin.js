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
    '1A2B3C4D5E6F',
];

// 1010 10111100110111101111

// = parseInt(hex, 16).toString(2);


const gets = this.gets || getGets(test);
const print = this.print || console.log;

let input = gets();

let str = '';

for (let i = 0; i < input.length; i++) {

    switch (input[i]) {
        case '0': str += '0000'; break;
        case '1': str += '0001'; break;
        case '2': str += '0010'; break;
        case '3': str += '0011'; break;
        case '4': str += '0100'; break;
        case '5': str += '0101'; break;
        case '6': str += '0110'; break;
        case '7': str += '0111'; break;
        case '8': str += '1000'; break;
        case '9': str += '1001'; break;
        case 'A': str += '1010'; break;
        case 'B': str += '1011'; break;
        case 'C': str += '1100'; break;
        case 'D': str += '1101'; break;
        case 'E': str += '1110'; break;
        case 'F': str += '1111'; break;
        default: break;
    }
}
print(str.replace(/^0+(?!\.|$)/, ''));

// 000110100010101100111100010011010101111001101111
// 000110100010101100111100010011010101111001101111


