// Задача: найти item в массиве 

const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let count = 0

// Решение с помощью цикла while
function binarySearch(array, item) {
    let start = 0		   	// стартовый индекс массива
    let end = array.length 	// количество элемнтов в массиве
    let middle; 		   	// index центрального элемента массива
    let found = false      	// флаг - нужен для остановки цикла
    let position = -1	   	// позиция элемнта 

    while (found === false && start <= end) {
        count+=1
        middle = Math.floor((start + end) / 2); // высчитываем index центрального элемента
		console.log(array[middle])		 
        if (array[middle] === item) {			// если центральный элемент массива === искомому
            found = true 						// останавливаем цикл
            position = middle 
            return position; 					// возвращаем индекс найденого элемента
        }
        if (item < array[middle]) { 			// елси искомый элемент меньше центрального
            end = middle - 1					// 
        } else {								// или же 
            start = middle + 1					// 
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
