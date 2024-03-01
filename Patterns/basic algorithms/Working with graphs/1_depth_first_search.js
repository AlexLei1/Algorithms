// Поиск в глубину - Depth First Search

/* Этот алгоритм выполняет обход в глубину в графе. Он проходит через все вершины, 
которые достижимы из начальной вершины, выводя их по порядку. */

function depthFirstSearch(graph, start) {
    let stack = [start];

    while(stack.length) {
        let vertex = stack.pop();
        console.log(vertex);
        vertex.visited = true;

        for(let neighbor of vertex.neighbors){
            if(!neighbor.visited) {
                stack.push(neighbor)
            }
        }
    }
}