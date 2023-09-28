// Интерполяционный поиск - Interpolate search

/* Интерполяционный поиск — это алгоритм поиска, который используется для нахождения значения в отсортированном массиве. 
Он работает путем сравнения значения элемента с левой и правой границами интервала. Если значение находится внутри интервала, 
то алгоритм продолжает искать в средней точке интервала. Если значение выходит за пределы интервала, то выбирается новый интервал. 
Этот процесс продолжается до тех пор, пока не будет найден элемент или интервал не станет слишком маленьким. */


function interpolateSearch(array, target) {
	let left = 0;
	let right = array.length - 1;
	
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		
		if (array[mid] === target) {
			return mid;
		} else if (array[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	
	return -1;
}
  
const array = [2, 5, 6, 8, 10, 12, 14, 15, 16, 19, 22, 42];
const target = 10;
console.log(interpolateSearch(array, target)); 
