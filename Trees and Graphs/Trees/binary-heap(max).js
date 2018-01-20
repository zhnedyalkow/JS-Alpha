class Heap {
    constructor(compareFunc) {
        this.heap = [];
        this.compareFunc = compareFunc;
        // this.compareFunc = ((a, b) => {
        //     return a > b;
        // });
    }
    
    getTop() {
        return this.heap[1];
    }

    get length() {
        return this.heap.length - 1;
    }

    isEmpty() {
        return this.heap.length === 1;
    }

    insert(...value) {
        if (value.length === 1) {
            let index = this.heap.length;
            this.heap.push(value);

            while (index > 1 && this.compareFunc(value, this.heap[Math.trunc(index / 2)])) {
                this.heap[index] = this.heap[Math.trunc(index / 2)];
                index = Math.trunc(index / 2);
            }
            this.heap[index] = value[0];
        } else {
            value.forEach((x) => this.insert(x));
        }
    }

    delete() { // delete top element
        const value = this.heap.pop();
        let index = 1;

        if (!this.isEmpty()) {
            while (index * 2 + 1 < this.heap.length) {
               const smallestChildIndex = this.compareFunc(this.heap[index * 2],
                this.heap[index * 2 + 1]) ? index * 2 : index * 2 + 1;

                if (this.compareFunc(this.heap[smallestChildIndex], value)) {
                    this.heap[index] = this.heap[smallestChildIndex];
                    index = smallestChildIndex;
                } else {
                    break;
                }
            }

            if (index * 2 < this.heap.length) {
                const smallestChildIndex = index * 2;
                if (this.compareFunc(this.heap[smallestChildIndex], value)) {
                    this.heap[index] = this.heap[smallestChildIndex];
                    index = smallestChildIndex;
                }
            }
            this.heap[index] = value;
        }
    }
}


const arr = [10, 5, 4, 7, 11, 13, 2, 1, 3, 17];
 const topElements = [];

const heap = new Heap((a, b) => a < b); // max heap implementation

arr.forEach((x) => {
    heap.insert(x);
    //topElements.push(heap.getTop());
});
console.log(heap);
console.log(heap.getTop());
// heap.insert(...arr);
//console.log(heap);
//console.log(heap.getTop());
//heap.delete();
//console.log(heap);

// for (let i = 0; i < heap.length - 1; i++) {
//     // if (topElements[i] !== topElements[i - 1]) {
//     //     console.log(topElements[i]);
//     // }
//     topElements.push(heap.getTop());
//     heap.delete();
// }

//console.log(topElements);
//console.log(topElements);


//console.log(heap);
//console.log(heap.length);
//console.log(heap.getTop());