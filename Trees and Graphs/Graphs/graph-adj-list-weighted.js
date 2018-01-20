class Graph {
    constructor(nodesCount) {
        this._nodes = Array.from({ length: nodesCount + 1,
        }, () => []);
    }

    addEdge(x, y) {
        this.addDirectedEdge(x, y);
        this.addDirectedEdge(y, x);
    }

    addDirectedEdge(from, to) {
        this._nodes[from].push(to);
    }

    addWeightedEdge(x, y, weight) {
        this.addDirectedWeightedEdge(x, y, weight);
        this.addDirectedWeightedEdge(y, x, weight);
    }

    addDirectedWeightedEdge(from, to, weight) {
        // this._nodes[from].push({ to, weight });
        this._nodes[from].push({
            to,
            weight,
         });
          
    }
}

const graph = new Graph(8);
graph.addWeightedEdge(2, 6, 5);
graph.addWeightedEdge(6, 8, 5);
graph.addWeightedEdge(1, 8, 2);
graph.addWeightedEdge(2, 3, 0);
graph.addWeightedEdge(5, 7, -12);
graph.addWeightedEdge(3, 6, 7);
graph.addWeightedEdge(1, 6, 99);
graph.addWeightedEdge(2, 4, 10000);
graph.addWeightedEdge(2, 8, -1111);

graph._nodes.forEach((row) => console.log(row));
