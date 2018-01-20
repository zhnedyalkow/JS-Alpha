/* globals Set Map */
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
// '5 5',
// '0 3',
// '2 1',
// '1 4',
// '1 3',
// '4 3',
'8 3',
'0 7',
'0 4',
'7 4',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});
// Topological sorting
// while...
//     v = get best v
//     add to res
//     delete v from dependancies(with no dependancies)
/* globals Map Set */
class Graph {
    constructor() {
        this.nodes = new Map(); // vertices
        this.counts = new Map(); // counts how many edges go into a node
    }
    getBest(used) {
        const vertices = [];
        for (const [vertex, count] of this.counts) {
            if (count > 0 || used.has(vertex)) {
                continue;
            }
            vertices.push(vertex);
        }
        const z = vertices.sort((a, b) => a - b)[0];
        used.add(z);
        return typeof z === 'number'? z : null;
    }
    remove(vertex, used) {
        used.add(vertex);
        if (!this.nodes.has(vertex)) {
            return;
        }
        this.nodes.get(vertex)
        .forEach((next) => {
            this.counts.set(next, 
                this.counts.get(next) - 1)
        });
    }
    addEdge(from, to) {
        if (!this.nodes.has(from)) {
            this.nodes.set(from, []);
        }
        if (!this.counts.has(to)) {
            this.counts.set(to, 0);
        }
        if (!this.counts.has(from)) {
            this.counts.set(from, 0);
        }
        this.counts.set(to,
            this.counts.get(to) + 1);
        this.nodes.get(from).push(to);
    }
    getSortedGraph() {
        const path = [];
        const used = new Set();

        while(true) {
            const best = this.getBest(used);
            if (best === null) {
                break;
            }
            path.push(best);
            this.remove(best, used);
        }
        return path;
    }
    // _addZeroEdgesToNonUsedVertices() {
    //     for (let i = 0; i < this.inEdges.length; i += 1) {
    //         if (typeof this.inEdges[i] === 'undefined') {
    //             this.inEdges[i] = 0;
    //         }
    //     }
    // }
}
// -----------------------------------------
const [n, m] = gets().split(' ').map(Number);
const graph = new Graph();
for (let i = 0; i < m; i++) {
    const [x, y] = gets().split(' ').map(Number);
    graph.addEdge(x, y);
}
print(graph.getSortedGraph().join('\n'));