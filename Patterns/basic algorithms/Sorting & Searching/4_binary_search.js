// Бинарный поиск - Binary search

const binarySearch = (arr, target) => {
	let left = 0;
	let right = arr.length - 1;
  
	while (left <= right) {
	  const middle = Math.floor((left + right) / 2);
  
	  if (arr[middle] === target) {
		return middle;
	  } else if (arr[middle] < target) {
		left = middle + 1;
	  } else {
		right = middle - 1;
	  }
	}
  
	return -1;
  };
  
  const arr = [2, 5, 6, 8, 10, 12, 14, 15, 16, 19, 22, 42];
  const target = 10;
  console.log(binarySearch(arr, target)); // 9