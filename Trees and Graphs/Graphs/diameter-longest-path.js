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
'11',
'2 7 2',
'1 7 6',
'5 1 8',
'2 8 6',
'8 6 9',
'10 5 5',
'9 1 9',
'0 10 15',
'3 1 21',
'6 4 3',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

class Graph {
    constructor(nodesCount) {
        this.matrix = [];
        this.matrix = Array.from({ length: nodesCount,
        }, () => []);
    }

   addEdge(x, y, weight) {
        this.addWeightedDirectedEdge(x, y, weight);
        this.addWeightedDirectedEdge(y, x, weight);
    }

    addWeightedDirectedEdge(from, to, weight) {
        this.matrix[from].push({ to: to, distance: weight });
        this.matrix[to].push({ to: from, distance: weight });
    }

    getLongestPath() {
        const used = new Set();
        let currentDistance = 0;
        let maxDistance = Number.MIN_SAFE_INTEGER;
        let nextVertex;

        const dfs = (vertex) => {
            used.add(vertex);

            this.matrix[vertex]
            .forEach((next) => {
                if (used.has(next.to)) {
                    return;
                }
                currentDistance += next.distance;

                if (currentDistance > maxDistance) {
                    maxDistance = currentDistance;
                    nextVertex = next.to; // next vertex
                }
             
                dfs(next.to);
                currentDistance -= next.distance;
            });
        };

        dfs(0);
        currentDistance = 0;
        used.clear();
        dfs(nextVertex);
        return maxDistance;
    }
} 

// ---------------------------------------------

const n = +gets();
const graph = new Graph(n);

for (let i = 0; i < n - 1; i++) {
    const [x, y, weight] = gets().split(' ').map(Number);
    graph.addEdge(x, y, weight);
}
print(graph.getLongestPath());
// quit(0);