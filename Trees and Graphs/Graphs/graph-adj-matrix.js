class Graph {
    constructor(nodesCount) {
        this._matrix = Array.from({
            length: nodesCount,
        });

        for (let i = 0; i < nodesCount; i+=1) {
            this._matrix[i] = Array.from({
                length: nodesCount,
            }, () => false);
        }
    }

    addEdge(x, y) {
        this.addDirectedEdge(x, y);
        this.addDirectedEdge(y, x);
    }

    addDirectedEdge(from, to) {
        this._matrix[from - 1][to - 1] = true;
    }
}

const graph = new Graph(8);
graph.addEdge(1, 6);
graph.addEdge(1, 8);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 6);
graph.addEdge(2, 8);
graph.addEdge(3, 6);
graph.addEdge(5, 2);
graph.addEdge(6, 8);

// using when we have full graph
// full graph -> n vurha - rebra n * m -> n = 8 -> (n - 1) rebra 
// (n - 1) + (n - 2) + (n - 3) -> (n * n) / 2
graph._matrix.forEach((row) => console.log(row));

// using array

// class Graph {
//     constructor() {
//         this.matrix = [];
//     }

//     addEdge(x, y) {
//         this.addDirectedEdge(x, y);
//         this.addDirectedEdge(y, x);
//     }

//     addDirectedEdge(x, y) {
//         if (typeof this.matrix[x] === 'undefined') {
//             this.matrix[x] = [];
//         }

//         this.matrix[x][y] = true;
//     }
// }

// const graph = new Graph();
// graph.addEdge(2, 6);
// graph.addEdge(1, 3);
// graph.addEdge(4, 5);
// graph.addEdge(7, 8);

// console.log(graph);
