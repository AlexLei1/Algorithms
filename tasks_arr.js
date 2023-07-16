// 217. Contains Duplicate

//? Учитывая целочисленный массив nums, вернуть true, если какое-либо значение встречается в массиве не менее двух раз, 
//? и вернуть false, если каждый элемент различен.
//? (Arrays)

var containsDuplicate = function(nums) {
	//! создаем колекцию/set
	let set = new Set()
	//! бежим по циклу
	for(let i = 0; i < nums.length; i++){
		//! добавляем число в колекцию/set
		set.add(nums[i])
	}
	console.log(set)
	//! если количество значений в колекцие/set === количеству значений в массиве
	if ([...set].length === nums.length){
		return false
	} else {
		return true
	}
};
console.log(containsDuplicate([1,2,3,1])) // true
console.log(containsDuplicate([1,2,3,4])) // false

//! ====================================================================================================================

// 268. Missing Number

//? Учитывая массив nums, содержащий n различных чисел в диапазоне [0, n], вернуть единственное число в диапазоне, 
//? отсутствующее в массиве.
//? (Arrays, Bit Manipulation)

var missingNumber = function (nums) {
	//! получаем число элемнтов в массиве nums
  const n = nums.length;

	//! используем формулу суммирования Гаусса
  const expectedSum = (n * (n + 1)) / 2;
	//! инициализируем актуальное число
  let actualSum = 0;

	//! бежим циклом по массиву чисел и присваеваем их актуальному числу
  for (let i = 0; i < nums.length; i++) {
    actualSum = actualSum + nums[i]
  }
  
	//! от формулы отнимаем число актуальных значений
  return expectedSum - actualSum
};

console.log(missingNumber([3,0,1]))

//! ====================================================================================================================

// 448. Find All Numbers Disappeared in an Array 

//? Учитывая массив nums из n целых чисел, где nums[i] находится в диапазоне [1, n], 
//? вернуть массив всех целых чисел в диапазоне [1, n], которые не появляются в nums.
//? (Arrays)

var findDisappearedNumbers = function(nums) {
	let n = nums.length;
	let set = new Set(nums);
	let array = [];
	for (let i = 1; i <= n; i++) {
			if (!set.has(i)) {
				 array.push(i);
			}
	}
	return set;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])) // [5, 6]
console.log(findDisappearedNumbers([1,1])) // [2]

//! ====================================================================================================================

// 136. Single Number

//? В непустом массиве целых чисел nums каждый элемент встречается дважды, кроме одного. Найди ту единственную. 
//? Вы должны реализовать решение с линейной сложностью времени выполнения и использовать только постоянное дополнительное пространство.
//? (Arrays, Bit Manipulation)

var singleNumber = function(nums) {
	//! Инициализировать уникальный номер...
	let uniqNum = 0;
	//! Проведите все элементы через цикл...
	for (let i = 0; i < nums.length; i++) {
			//! Концепция исключающего ИЛИ...
			uniqNum = uniqNum ^ nums[i];
	} return uniqNum; //! Возвращаем уникальный номер...
};

console.log(singleNumber([2,2,1])) // 1
console.log(singleNumber([4,1,2,1,2])) // 4
console.log(singleNumber([1])) // 1

//! ====================================================================================================================

// 2022. Convert 1D Array Into 2D Array

//? Вам дан 0-индексированный одномерный (1D) целочисленный массив original и два целых числа, m и n.
//? Вам нужно создать двумерный (2D) массив с m строками и n столбцами, используя все элементы из оригинала.

//? Элементы с индексами от 0 до n - 1 (включительно) исходного должны формировать первую строку построенного двумерного массива, 
//? элементы с индексами от n до 2 * n - 1 (включительно) должны формировать вторую строку построенного двумерного массива, и так далее.

//? Возвращает двумерный массив m x n, построенный в соответствии с описанной выше процедурой, или пустой двумерный массив, если это невозможно.
//? (Arrays)

var construct2DArray = function(original, m, n) {
	if(m * n !== original.length) return []
	let result = []
	
	for(let i = 0; i < original.length; i+=n){
			result.push(original.slice(i,n + i))
	}
	
	return result
};

console.log(construct2DArray([1,2,3,4], 2, 2)) // [[1,2],[3,4]]
console.log(construct2DArray([1,2,3], 1, 3)) // [[1,2,3]]
console.log(construct2DArray([1,2], 1, 1)) // []

//! ====================================================================================================================

// 283. Move Zeroes

//? Учитывая целочисленный массив nums, переместите все 0 в его конец, сохраняя относительный порядок ненулевых элементов. 
//? Обратите внимание, что вы должны сделать это на месте, не создавая копию массива.
//? (Arrays, Two Pointers)


let moveZeroes = function (nums) {
	let low = 0;
	let high = low + 1;

	while (high <= nums.length - 1) {
			if (nums[low] !== 0) {
					low++;
					high++;
			} else {
					if (nums[high] !== 0) {
							[nums[low], nums[high]] = [nums[high], nums[low]];
							low++;
					}
					high++;
			}
	}
};

console.log(moveZeroes([0,1,0,3,12])) // [1,3,12,0,0]
console.log(moveZeroes([0])) // [0]

//! ====================================================================================================================