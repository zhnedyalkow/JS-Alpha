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
    '3',
    '3',
    '2',
    '3',
    '-2',
    '5',
    '4',
    '2',
    '7',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

//---------------------------------------

const n = +gets();
const k = +gets();
const arr = [];
const under = -2048;
const over = 2048;

let sum = +0;
let index = +0;
let max;
let min;

  for (let i = 0; i < n; i++) {
      arr.push(+gets());
  }


if (k > n/2) {
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    for (let i = 0; i < n-k; i++) {
        min = Math.min(...arr);
        index = arr.indexOf(min);
        arr[index] = over;
        sum -= min;
    }
} else {
    for (let i = 0; i < k; i++) {
        max = Math.max(...arr);
        index = arr.indexOf(max);
        arr[index] = under;
        sum += max;
    }
}

print(sum);