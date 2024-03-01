// Сортировка вставками - Insertion sort

function insertionSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		var key = arr[i];
		var j = i - 1;
	
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j--;
		}
	
		arr[j + 1] = key;
	}
  
	return arr;
}
  
var arr = [12, 23, 5, 34, 9, 8, 1, 76, 2];
console.log(insertionSort(arr));