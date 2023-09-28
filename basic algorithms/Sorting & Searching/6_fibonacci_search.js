// Поиск Фибоначчи - Fibonacci Search

function fibonacciSearch(array, key) {
    if (array.length === 1) {
        if (array[0] === key) {
            return 0;
        } else {
            return -1;
        }
    }
    
    let middle = Math.floor(array.length / Math.sqrt(array.length));
    
    if (key < array[middle]) {
        return fibonacciSearch(array.slice(0, middle), key);
    } else if (key > array[middle]) {
        return fibonacciSearch(array.slice(middle), key);
    } else {
        return middle;
    }
}

let array = [7, 3, 11, 15];
let key = 11;
let result = fibonacciSearch(array, key);
console.log(result);