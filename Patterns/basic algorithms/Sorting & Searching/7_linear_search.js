// Линейный поиск - Linear search

const array = [1,4,5,8,5,1,2,7,5,2,11]
let count = 0 // подсчет итераций выполнения алгоритма
function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === item) {
            return i;
        }
    }
    return null
}

console.log(linearSearch(array, 11))
console.log(count)
// Сложность решения = O(n)
// node 1_linear_search.js
