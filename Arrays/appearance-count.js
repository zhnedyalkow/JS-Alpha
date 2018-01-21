const n = +gets();
const input = gets().split(' ').map((Number));
const x = +gets();
let counter = 0;

for (const number of input) {
    if (number === x) {
        counter+=1;
    }
}

print(counter);
quit(0);
