/* globals Set */

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

    existPathBetween(from, to) {
        const used = new Set();
        let pathExists = false;
        
        const dfs = (vertex) => {
            this._nodes[vertex]
                .filter((next) => !used.has(next))
                .forEach((next) => {
                    used.add(next);
                    dfs(next);
                });
        };

        dfs(from);

        return used.has(to);
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

// graph._nodes.forEach((row) => console.log(row));

console.log(graph.existPathBetween(1, 3));
console.log(graph.existPathBetween(7, 8));

