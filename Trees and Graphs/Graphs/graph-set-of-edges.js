class Graph {
    constructor(nodesCount) {
        this._edges = [];
    }

    addEdge(x, y) {
        this.addDirectedEdge(x, y);
        this.addDirectedEdge(y, x);
    }

    addDirectedEdge(from, to) {
        this._edges.push({ from, to });
    }
}

const printGraph = (graph) => {
    console.log('-'.repeat(50));
    graph._edges.forEach((row) => console.log(row));
    console.log('-'.repeat(50));
}

const graph = new Graph(8);
printGraph(graph);
graph.addEdge(1, 6);
graph.addEdge(1, 8);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 6);
graph.addEdge(2, 8);
graph.addEdge(3, 6);
graph.addEdge(5, 2);
graph.addEdge(6, 8);
graph._edges.sort((x, y) => x.from - y.from);
// graph._edges.sort((x, y) => x.from - y.from);
printGraph(graph);
// using when we have full graph
// za vseki vruh v nachaloto po nula susedi
// za primer (1, 6) imame (1, 6) i (6, 1) te sa susedi na 1
// graph._nodes.forEach((row) => console.log(row));


// class Graph {
//     constructor() {
//         this.edges = [];
//     }

//     addEdge(x, y) {
//         this.addDirectedEdge(x, y);
//         this.addDirectedEdge(y, x);
//     }

//     addDirectedEdge(from, to) {
//         this.edges.push({ from, to }); // [ {}, {}, ]
//     }
// }

// const graph = new Graph();
// graph.addEdge(3, 4);
// graph.addEdge(4, 5);
// console.log(graph);