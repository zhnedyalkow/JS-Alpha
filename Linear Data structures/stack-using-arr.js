class Stack {
    constructor() {
        this.arr = [];
    }

    push(value) {
        this.arr.push(value);
    }

    pop() {
        return this.arr.pop();
    }
}

const stack = new Stack();
stack.push(1);
console.log(stack);