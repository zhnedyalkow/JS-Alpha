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
    // 'ADD 5',
    // 'ADD 1',
    // 'ADD 2',
    // 'FIND',
    // 'ADD 3',
    // 'FIND',
    // 'ADD 1',
    // 'FIND',
    // 'EXIT',

'ADD 5',
'ADD 1',
'FIND',
'ADD 2',
'FIND',
'ADD 3',
'ADD 1',
'FIND',
'ADD 3',
'FIND',
'EXIT',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;


class Heap {
    constructor(compareFunc) {
        this.values = [null];
        this.compareFunc = compareFunc;
    }

    get top() {
        return this.values[1];
    }

    get count() {
        return this.values.length - 1;
    }

    get isEmpty() {
        return this.count === 0;
    }

    add(value) {
        let index = this.values.length;
        this.values.push(value);

        while (index > 1 && this.compareFunc(value, this.values[index >> 1])) {
            this.values[index] = this.values[index >> 1];
            index >>= 1;
        }

        this.values[index] = value;
    }

    getTop() {
        return this.values[1];
    }


    removeTop() {
        const value = this.values[this.values.length - 1];
        this.values.pop();

        if (!this.isEmpty) {
            this._heapifyDown(1, value);
        }
    }

    _heapifyDown(index, value) {
        while (index * 2 + 1 < this.values.length) {
            const isFirstChildBetter =
                this.compareFunc(
                    this.values[index * 2],
                    this.values[index * 2 + 1]
                );

            const smallerChildIndex = isFirstChildBetter ?
                index * 2 :
                index * 2 + 1;
            if (this.compareFunc(this.values[smallerChildIndex], value)) {
                this.values[index] = this.values[smallerChildIndex];
                index = smallerChildIndex;
            } else {
                break;
            }
        }

        if (index * 2 < this.values.length) {
            const smallerChildIndex = index * 2;
            if (this.compareFunc(this.values[smallerChildIndex], value)) {
                this.values[index] = this.values[smallerChildIndex];
                index = smallerChildIndex;
            }
        }

        this.values[index] = value;
    }
}


class MedianHeap {
    constructor() {
        this._minHeap = new Heap((a, b) => {
            return a < b;
        });

        this._maxHeap = new Heap((a, b) => {
            return a > b;
        });
    }

    isEmpty() {
        return this._minHeap.isEmpty && this._maxHeap.isEmpty;
    }

    insert(value) {
        if (this.isEmpty()) {
            this._minHeap.add(value);
        } else {
            if (value <= this.getMeddian()) {
                this._maxHeap.add(value);
            } else {
                this._minHeap.add(value);
            }
        }

        this._rebalance();
    }

    _rebalance() {
        if (Math.abs(this._minHeap.count - this._maxHeap.count) > 1) {
            if (this._minHeap.count > this._maxHeap.count) {
                this._maxHeap.add(this._minHeap.getTop());
                this._minHeap.removeTop();
            } else {
                this._minHeap.add(this._maxHeap.getTop());
                this._maxHeap.removeTop();
            }
        }
    }

    getMeddian() {
        if (this._minHeap.count === this._maxHeap.count) {
            return (this._minHeap.getTop() + this._maxHeap.getTop()) / 2;
        } else if (this._maxHeap.count > this._minHeap.count) {
            return this._maxHeap.getTop();
        }
        return this._minHeap.top;
    }
}


let input;
const res = [];
const myHeap = new MedianHeap();

while ((input = gets()) !== 'EXIT') {

    if (input.substr(0, input.indexOf(' ')) === 'ADD') {

        input = input.split(' ');
        const command = input[0];
        const value = +input[1];

        myHeap.insert(value);
    } else if (input === 'FIND') {
        res.push(myHeap.getMeddian());
    } else {
        break;
    }
}

res.forEach((element) => {
    print(element);
});
// quit(0);
