// Задача: найти item в массиве 

const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let count = 0

// Решение с помощью цикла while
function binarySearch(array, item) {
    let start = 0
    let end = array.length // первый элемент массива
    let middle; 					 // последний элемент массива
    let found = false    	 // флаг
    let position = -1			 // позиция элемнта 

    while (found === false && start <= end) {
        count+=1
        middle = Math.floor((start + end) / 2); // высчитываем index центрального элемента
				// если элемент среднего массива равен 
        if (array[middle] === item) {
            found = true // останавливаем цикл
            position = middle 
            return position; // возвращаем индекс найденого элемента
        }
				// елси искомый элемент меньше центрального
        if (item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position;
}
console.log(binarySearch(array, 15))
console.log(count)
// Сложность O(log2n)
//=========================================================================================


const array1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let count1 = 0

// Решение с помощью рекурсии
function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2); // высчитываем index центрального элемента
    count1 += 1
    if (item === array[middle]) {
        return middle
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, 0, middle - 1 )
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end )
    }
}

console.log(recursiveBinarySearch(array1, 14, 0, array.length))
console.log(count)
// node 2_binary_search.js
// [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] 