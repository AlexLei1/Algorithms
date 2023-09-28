// Быстрая сортировка - Quick sort 

const arr = [0,3,2,5,6,8,23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,]
let count = 0

function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivot = arr[0];
  
  var left = []; 
  var right = [];
  for (var i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return quicksort(left).concat(pivot, quicksort(right));
};

console.log(quicksort(arr))

