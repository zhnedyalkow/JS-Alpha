class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    push(...values) {
        const node = {
            value: values[0],
            next: null,
            prev: null,
        };

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = this.tail.next;
        }

        this.count += 1;

        return this;
    }


    pop() {
        if (this.tail === null) {
            return null;
        }
        this.count -= 1;

        const value = this.tail.value;
        this.tail = this.tail.prev;

        if (this.head === null) {
            this.head = null;
            this.tail = null;
            return value;
        }

        this.tail.next = null;
        return value;
    }

    unshift(...values) {

        const node = {
            value: values[0],
            next: null,
            prev: null,
        };

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = this.head.prev;
        }
    }

    shift() {
        if (this.head === null) {
            return null;
        }

        this.count -= 1;

        const value = this.head.value;
        this.head = this.head.next;

        if (this.head === null) {
            this.head = null;
            this.tail = null;
            return value;
        }

        this.head.prev = null;

        return value;
    }

    isEmpty() {
        return this.count === 0;
    }

    [Symbol.iterator]() {
        let node = this.head;

        function* iterator() {
            while(node !== null) {
                yield node.value;
                node = node.next
            }
        }
        return iterator();
    }
}

const list = new LinkedList();

list.push(1).push(2).push(3).push(4).push(5);
console.log(list);

class Queue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(...values) {
        this.list.push(values);
        return this;
    }

    dequeue() {
        this.list.shift();
        return this;
    }

    peek() {
        return this.list.head();
    }

    isEmpty() {
        return this.list.isEmpty();
    }
}

// const queue = new Queue();

// queue.enqueue(1)
//     .enqueue(2)
//     .enqueue(3)
//     .enqueue(4);

// console.log(queue);

class Stack {
    constructor() {
        this.vals = [];
    }

    get count() {
        return this.vals.length;
    }

    push(...values) {
        values.forEach((val) => {
            this.vals.push(val);
        });

        return this;
    }

    pop() {
        const val = this.vals[this.vals.length - 1];
        this.vals = this.vals.slice(0, this.vals.length - 1);
        return val;
    }

    peek() {
        return this.vals[this.vals.length - 1];
    }

    isEmpty() {
        return this.count === 0;
    }
}

// const stack = new Stack();
// stack.push(1);
// stack.push(2).push(3).push(4, 5, 6);
// console.log(stack);

// stack.pop();
// console.log(stack);

