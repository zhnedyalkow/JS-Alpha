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
    // '8',
    // 'index.html needs main.css',
    // 'main.css needs sub1.css',
    // 'index.html needs main.js',
    // 'main.css needs sub2.css',
    // 'index.html needs logo.png',
    // 'main.js needs player.png',
    // 'main.js needs partial.html',
    // 'partial.html needs partial.js',

'11',
'main.css needs sub1.css',
'index.html needs main.js',
'main.css needs sub2.css',
'main.js needs partial.html',
'index.html needs logo.png',
'index.html needs sub2.css',
'partial.html needs partial.js',
'main.js needs player.png',
'index.html needs main.css',
'sub2.css needs partial.js',
'index.html needs partial.html',
]

/* eslint-disable */

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

// Topological sorting

// while...
//     v = get best v
//     add to res
//     delete v from dependancies(with no dependancies)


// ---------

/* globals Map Set */

class Graph{
    constructor(){
        this.nodes = new Map(); // vertices
        this.allVertices = new Set();
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
        return vertices.sort()[0] || null;
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
        
        this.allVertices.add(from);
        this.allVertices.add(to);
    }

    getSortedGraph() {
        const path = [];
        const used = new Set();

        // for(;;)
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
}

// ---------------

const n = +gets();
const arr = [];
const graph = new Graph();
for (let i = 0; i < n; i++) {
    const input = gets().split(' ');
    const firstItem = input[0];
    const thirdItem = input[2];
    graph.addEdge(firstItem, thirdItem);
}

print(graph.getSortedGraph().join(' '));

// topologichno sortirane