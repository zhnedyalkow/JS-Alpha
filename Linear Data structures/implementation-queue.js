class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    enqueue(...values) {
        if (values.length > 1) {
            values.forEach(this.enqueue);
            return this;
        }

        let node = {
            value: values[0],
            next: null,
        };

        if (this.tail === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node = this.tail;
        }

        this.count += 1;
        return this;
    }

    dequeue(...values) {
        if (this.head === null) {
            return null;
        }

        const value = this.head.value;
        this.head = this.head.next;
        this.count -= 1;

        return value;
    }

    peek() {
        if (this.tail === null) {
            return null;
        }

        return this.tail.value;
    }

    isEmpty() {
        return this.count === 0;
    }
}

let queue = new Queue();
queue.enqueue(1).enqueue(2);
console.log(queue);
console.log(queue.peek());
console.log(queue.isEmpty());