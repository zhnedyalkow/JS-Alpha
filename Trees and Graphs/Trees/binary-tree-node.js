class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left || null;
        this.right = right || null;
    }

    // methods: find, insert and delete
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(val) {
        const root = this.root;

        if (!root) {
            this.root = new Node(val);
            return;
        }

        let curr = this.root; // current node
        let newNode = new Node(val);

        while (curr) {
            if (val < curr.val) {
                if (!curr.left) {
                    curr.left = newNode;
                    break;
                } else {
                    curr = curr.left;
                }
            } else {
                if (val > curr.val) {
                    if (!curr.right) {
                        curr.right = newNode;
                        break;
                    } else {
                        curr = curr.right;
                    }
                }
            }
        }
    }

    find(val) {
        let curr = this.root;

        if (curr.val === val) {
            console.log(val);
            return;
        }

        if (curr.val < val) {
            if (!curr.right) {
                console.log('no such node');
                return;
            }

            if (curr.right.val === val) {
                console.log(curr.right.val);
                return;
            }
        } else {
            if (!curr.left) {
                console.log('no such node');
                return;
            }

            if (curr.left.val === val) {
                console.log(curr.left.val);
                return;
            }
        }
    }
}

let bst = new BinarySearchTree();
// bst.add(3);
// bst.add(2);
// bst.add(4);
// bst.add(1);
// bst.add(5);
// console.log(bst);
// // console.log(bst);
// bst.find(4);

bst.add(2);
console.log(bst);
bst.add(1);
console.log(bst);
bst.add(3);
console.log(bst);