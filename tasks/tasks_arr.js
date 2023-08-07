//* 217. Contains Duplicate

//todo Учитывая целочисленный массив nums, вернуть true, если какое-либо значение встречается в массиве не менее двух раз, 
//todo и вернуть false, если каждый элемент различен.
//todo (Arrays)

var containsDuplicate = function(nums) {
	// создаем колекцию/set
	let set = new Set()
	// бежим по циклу
	for(let i = 0; i < nums.length; i++){
		// добавляем число в колекцию/set
		set.add(nums[i])
	}
	console.log(set)
	// если количество значений в колекцие/set === количеству значений в массиве
	if ([...set].length === nums.length){
		return false
	} else {
		return true
	}
};
console.log(containsDuplicate([1,2,3,1])) // true
console.log(containsDuplicate([1,2,3,4])) // false

//! ====================================================================================================================

//* 268. Missing Number

//todo Учитывая массив nums, содержащий n различных чисел в диапазоне [0, n], вернуть единственное число в диапазоне, 
//todo отсутствующее в массиве.
//todo (Arrays, Bit Manipulation)

var missingNumber = function (nums) {
	// получаем число элемнтов в массиве nums
  const n = nums.length;

	// используем формулу суммирования Гаусса
  const expectedSum = (n * (n + 1)) / 2;
	console.log(expectedSum)
	// инициализируем актуальное число
  let actualSum = 0;

	// бежим циклом по массиву чисел и присваеваем их актуальному числу
  for (let i = 0; i < nums.length; i++) {
    actualSum = actualSum + nums[i]
  }
  
	// от формулы отнимаем число актуальных значений
  return expectedSum - actualSum
};

console.log(missingNumber([3,0,1]))

//! ====================================================================================================================

//* 448. Find All Numbers Disappeared in an Array 

//todo Учитывая массив nums из n целых чисел, где nums[i] находится в диапазоне [1, n], 
//todo вернуть массив всех целых чисел в диапазоне [1, n], которые не появляются в nums.
//todo (Arrays)

var findDisappearedNumbers = function(nums) {
	// получаем число элемнтов в массиве nums
  const n = nums.length;
	// создаем колекцию | множество | set и передаем массив чисел Так мы избаляемся от повторяющихся чисел 
	let set = new Set(nums);
	// пустой массив
	let array = [];
	// цикл арентируется на чило элентов в массиве nums
	for (let i = 1; i <= n; i++) {
			console.log(i)
			// если в колекции нет числа 
			if (!set.has(i)) {
				// добавляем в массив индекс 
				 array.push(i);
			}
	}
	return array;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])) // [5, 6]
console.log(findDisappearedNumbers([1,1])) // [2]

//! ====================================================================================================================

//* 136. Single Number

//todo В непустом массиве целых чисел nums каждый элемент встречается дважды, кроме одного. Найди ту единственную. 
//todo Вы должны реализовать решение с линейной сложностью времени выполнения и использовать только постоянное дополнительное пространство (простую переменную).
//todo (Arrays, Bit Manipulation)

var singleNumber = function(nums) {
	// Инициализировать уникальный номер...
	let uniqNum = 0;
	// Проведите все элементы через цикл...
	for (let i = 0; i < nums.length; i++) {
			// Концепция исключающего ИЛИ...
			uniqNum = uniqNum ^ nums[i]; 
	} return uniqNum; // Возвращаем уникальный номер...
};

console.log(singleNumber([2,2,1])) // 1
console.log(singleNumber([4,1,2,1,2])) // 4
console.log(singleNumber([1])) // 1

//! ====================================================================================================================

//* 2022. Convert 1D Array Into 2D Array

//todo Вам дан 0-индексированный одномерный (1D) целочисленный массив original и два целых числа, m и n.
//todo Вам нужно создать двумерный (2D) массив с m строками и n столбцами, используя все элементы из оригинала.

//todo Элементы с индексами от 0 до n - 1 (включительно) исходного должны формировать первую строку построенного двумерного массива, 
//todo элементы с индексами от n до 2 * n - 1 (включительно) должны формировать вторую строку построенного двумерного массива, и так далее.

//todo Возвращает двумерный массив m x n, построенный в соответствии с описанной выше процедурой, или пустой двумерный массив, если это невозможно.
//todo original = массив чисел | m = число столбцов | n = число элемнтов в столбце
//todo (Arrays)

var construct2DArray = function(original, m, n) {
	// если количиство строк и столбцов !== числу элемнтов в массиве original
	if(m * n !== original.length) return [] // возвращаем пустой массив
	// иницилизируем пустой массив
	let result = []
	// цекл работает оринтируясь на чило элемнтов в столбце
	for(let i = 0; i < original.length; i+=n){
		// пушим в массив числа используя метод slice для выбора нужного количество элемнов в массиве
		result.push(original.slice(i,n + i))
	}
	
	return result
};
console.log(construct2DArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 4, 4)) // [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
console.log(construct2DArray([1,2,3,4], 2, 2)) // [[1,2],[3,4]]
console.log(construct2DArray([1,2,3], 1, 3)) // [[1,2,3]]
console.log(construct2DArray([1,2], 1, 1)) // []

//! ====================================================================================================================

//* 283. Move Zeroes

//todo Учитывая целочисленный массив nums, переместите все 0 в его конец, сохраняя относительный порядок ненулевых элементов. 
//todo Обратите внимание, что вы должны сделать это на месте, не создавая копию массива.
//todo (Arrays, Two Pointers)


let moveZeroes = function (nums) {
	let low = 0;
	let high = low + 1;

	// если высота <= числу элемнтов в массиве - 1
	while (high <= nums.length - 1) {
		console.log(low, high)
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

//TODO--------------------------------------------------------------------------------------------------------------------

var moveZeroes1 = function(nums) {
	// левый укозатель
  let left = 0;
	// правый укозатель
  let right = 0;
	// бежим по циклу с условием, если левый укозатель < nums.length
  while(left < nums.length){

      if(nums[left] !== 0){
          [nums[left], nums[right]] = [nums[right], nums[left]];
					console.log(nums)
          right++
        }
        left++
    }
		return nums
};

console.log(moveZeroes1([0,1,0,3,12])) // [1,3,12,0,0]
console.log(moveZeroes1([0])) // [0]

//! ====================================================================================================================

//* 238. Product of Array Except Self

//todo Учитывая целочисленный массив nums, вернуть массив ответа, что answer[i] равен произведению всех элементов nums, 
//todo кроме nums[i]. Произведение любого префикса или суффикса чисел гарантированно соответствует 32-битному целому числу. 
//todo Вы должны написать алгоритм, который работает за время O(n) и не использует операцию деления.
//todo (ё)

var productExceptSelf = function (nums) {
	let product = 1;
	let zeroCount = 0; 
	for (let num of nums) {
			// елси число === 0 инкреминтируем zeroCount || умножаем product на число и запоминаем значение
			num === 0 ? zeroCount++ : product *= num
			// если 0 больше 1
			if (zeroCount > 1) {
					// возвращаем массев 
					return new Array(nums.length).fill(0)
			}
	}
	// цикл по массиву nums
	for (let i in nums) {
			// если zeroCount равен 0 
			if (!zeroCount) {
					// записываем в массив (product / nums[i])
					nums[i] = product / nums[i]
			}
			// если число в массиве не равно 0
			else if (nums[i] !== 0 ) {
				// меняем число на 0
					nums[i] = 0
			} else{
				// меняем число на product
					nums[i] = product
			}
	}
	return nums
};

console.log(productExceptSelf([1,2,3,4])) // [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])) // [0,0,9,0,0]

//! ====================================================================================================================

//* 287. Find the Duplicate Number

//todo Дан массив целых чисел nums, содержащий n + 1 целых чисел, где каждое целое число находится в диапазоне [1, n] включительно. 
//todo В nums есть только одно повторяющееся число, верните это повторяющееся число. 
//todo Вы должны решить проблему, не изменяя массив nums и используя только постоянное дополнительное пространство.
//todo (Arrays, Binary Search, Two Pointers)

var findDuplicate = function(nums) { // Arrays O(N)
	var seen = new Set()
	for(var i = 0; i < nums.length; i++){
			//*если в колекции уже есть число возвращаем его || добавляем в колекцию
			if(seen.has(nums[i])){ 
					return nums[i]  
			}else{
					seen.add(nums[i]) 
			}
	}
};

console.log(findDuplicate([3,1,3,4,2])) // 3
console.log(findDuplicate([1,3,4,2,2])) // 2

//TODO-------------------------------------------

var findDuplicate = function(nums) {
	const arrayOfElements = new Array(nums.length).fill(0);

	for (let i = 0; i < nums.length; i++) {
			const numValue = nums[i];
			arrayOfElements[numValue]++;
			if (arrayOfElements[numValue] == 2) {
					return numValue;
			}
	}

	return undefined;
};

console.log(findDuplicate([3,1,3,4,2])) // 3
console.log(findDuplicate([1,3,4,2,2])) // 2

//TODO--------------------------------------------------------------------------------------------------------------------

var findDuplicate = function(nums) { // Binary Search O(N)
    
	if(nums.length === 0 || nums === null) return 0;
	
	let left = 1;
	let right = nums.length -1;
	
	while(left < right){
			
			const mid = Math.floor(left + (right-left)/2);
			
			let count = 0;
			
			for(let i=0; i < nums.length; i++){
					if(nums[i] <= mid) count++
			}
			
			
			if(count > mid){
					right = mid;
			}else{
					left = mid +1;
			}
			
			count = 0;
	}
	
	return left
};

console.log(findDuplicate([3,1,3,4,2])) // 3
console.log(findDuplicate([1,3,4,2,2])) // 2

//TODO--------------------------------------------------------------------------------------------------------------------

function findDuplicate(nums) { // Two Pointers O(N)
	let slow = nums[0]
	let fast = nums[nums[0]]

	while(slow != fast) {
			slow = nums[slow]
			fast = nums[nums[fast]]
	}

	slow = 0

	while(slow != fast) {
			slow = nums[slow]
			fast = nums[fast]
	}

	return slow
};

console.log(findDuplicate([3,1,3,4,2])) // 3
console.log(findDuplicate([1,3,4,2,2])) // 2

//!====================================================================================================================

//* 442. Find All Duplicates in an Array

//todo Дан массив целых чисел nums длины n, где все целые числа nums находятся в диапазоне [1, n] 
//todo и каждое целое число встречается один или два раза, верните массив всех целых чисел, которые встречаются дважды. 
//todo Вы должны написать алгоритм, который работает за время O(n) и использует только постоянное дополнительное пространство.
//todo (Arrays)




