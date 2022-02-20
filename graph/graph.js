class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertext) {
    if (!this.adjacencyList[vertext]) this.adjacencyList[vertext] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  dfsRecursive(start) {
    let traversed = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;
    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      traversed.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    }
    dfs(start);
    return traversed;
  }

  dfsIterative(start) {
    let stack = [start];
    let visited = {};
    let traversed = [];
    while (stack.length) {
      let vertex = stack.pop();
      visited[vertex] = true;
      traversed.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          stack.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }
    return traversed;
  }
  bfs(start) {
    let queue = [start];
    let visited = {};
    let traversed = [];
    visited[start] = true;
    while (queue.length) {
      let currentVertex = queue.shift();
      traversed.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }
    return traversed;
  }
}

let graph = new Graph();
graph.addVertex("Austagram");
graph.addVertex("Mitamoin");
graph.addVertex("Itna");
graph.addVertex("Bajitpur");
graph.addVertex("Nikli");

graph.addEdge("Austagram", "Mitamoin");
graph.addEdge("Austagram", "Bajitpur");
graph.addEdge("Bajitpur", "Nikli");
graph.addEdge("Mitamoin", "Itna");

console.log(graph.dfsIterative("Austagram"));
console.log(graph.bfs("Austagram"));
console.log(graph);
