//! ====================================================================================================================
//* 217. Contains Duplicate
//todo Учитывая целочисленный массив nums, вернуть true, если какое-либо значение встречается в массиве не менее двух раз, 
//todo и вернуть false, если каждый элемент различен.
//todo (Arrays)
//! ====================================================================================================================

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

//!--------------------------------------------------------------------------------------------------------------------

//todo Time O(N^2) | Space O(1)

var containsDuplicate = (nums) => {
    for (let right = 0; right < nums.length; right++) {/* Time O(N) */
        for (let left = 0; left < right; left++) {         /* Time O(N) */
            const isDuplicate = nums[left] === nums[right];
            if (isDuplicate) return true;
        }
    }

    return false;
}

console.log(containsDuplicate([1,2,3,1])) // true
console.log(containsDuplicate([1,2,3,4])) // false

//!--------------------------------------------------------------------------------------------------------------------

//todo Time O(N * log(N)) | Space O(1)

var containsDuplicate = (nums) => {
    nums.sort((a, b) => a - b);/* Time O(N * log(N)) | Space O(1 || log(N)) */

	const hasDuplicate = (nums) => {
		for (let curr = 0; curr < (nums.length - 1); curr++) {/* Time O(N) */
			const next = (curr + 1);
	
			const isNextDuplicate = nums[curr] === nums[next];
			if (isNextDuplicate) return true;
		}
	
		return false;
	}

    return hasDuplicate(nums);
}

console.log(containsDuplicate([1,2,3,1])) // true
console.log(containsDuplicate([1,2,3,4])) // false

//!--------------------------------------------------------------------------------------------------------------------

//todo Time O(N) | Space O(N)

var containsDuplicate = (nums) => {
    const numsSet = new Set(nums);/* Time O(N) | Space O(N) */
    const isEqual = numsSet.size === nums.length;

    return !isEqual;
};

console.log(containsDuplicate([1,2,3,1])) // true
console.log(containsDuplicate([1,2,3,4])) // false

//!--------------------------------------------------------------------------------------------------------------------

//todo Time O(N) | Space O(N)

var containsDuplicate = (nums) => {
	let set = new Set()
    for (const num of nums) {/* Time O(N) */
        if (set.has(num)) return true;

        set.add(num);       /* Space O(N) */
    }

    return false;
};

//! ====================================================================================================================
//* 217. Contains Duplicate
//todo Имея две строки s и t, вернуть true, если t является анаграммой s, и false в противном случае. 
//todo Анаграмма — это слово или фраза, образованная путем перестановки букв другого слова или фразы, 
//todo обычно с использованием всех исходных букв ровно один раз.
//todo (Arrays)
//! ====================================================================================================================

//todo Time O(N * logN) | Space O(N)
//1 - сравниваем длину строк между собой 
//2 - функция reorder - символы в строке переставляет в алфовитном порядке
//3 - сравниваем строки между собой

var isAnagram = (s, t) => {
    const isEqual = s.length === t.length;
    if (!isEqual) return false;

	const reorder = (str) => str
    .split('')                         /* Time O(N)          | Space O(N) */
    .sort((a, b) => a.localeCompare(b))/* Time O(N * log(N)) | Space O(1 || log(N)) */
    .join(''); 
	console.log(reorder(s), reorder(t))

    return reorder(s) === reorder(t); /* Time O(N * logN) | Space O(N) */
};


console.log(isAnagram("anagram", "nagaram")) // true
console.log(isAnagram("rat", "car")) // false


//!--------------------------------------------------------------------------------------------------------------------

//todo  Time O(N) | Space O(1)
//1 - иницилизируем hash 
//2 - сравниваем длину строк между собой
//3 - функция addFrequency записывае в map символ => количество++
//4 - функция subtractFrequency проверяет в map символ => количество--
//5 - функция checkFrequency проверяет каждый символ => количество === 0  ? true : false

var isAnagram = (s, t) => {
	let map = new Map()

    const isEqual = s.length === t.length;
    if (!isEqual) return false;

    addFrequency(s, map);      /* Time O(N) | Space O(1) */
	console.log(map)
    subtractFrequency(t, map); /* Time O(N) | Space O(1) */
	console.log(map)

    return checkFrequency(map);/* Time O(N) */
};

const addFrequency = (str, map) => {
    for (const char of str) {/* Time O(N) */
        const count = (map.get(char) || 0) + 1;
        map.set(char, count);   /* Space O(1) */
    }
}
const subtractFrequency = (str, map) => {
    for (const char of str) {/* Time O(N) */
        if (!map.has(char)) continue;
        const count = map.get(char) - 1;
        map.set(char, count);   /* Space O(1) */
    }
};
const checkFrequency = (map) => {
    for (const [ char, count ] of map) {/* Time O(N) */
        const isEmpty = count === 0;
        if (!isEmpty) return false;
    }
    return true;
}

console.log(isAnagram("anagram", "nagaram")) // true
console.log(isAnagram("rat", "car")) // false

//! ====================================================================================================================
//* 1. Two Sum
//todo Учитывая массив целых чисел nums и целочисленное целевое значение, верните индексы двух чисел так, 
//todo чтобы в сумме они составляли целевое значение.
//todo Вы можете предположить, что каждый вход будет иметь ровно одно решение, 
//todo и вы не можете использовать один и тот же элемент дважды.
//todo Вы можете вернуть ответ в любом порядке.
//todo (Arrays)
//! ====================================================================================================================

//todo Time O(N) | Space O(N)
//1 создаем колекцию map
//2 бежим по массиву nums 
	//2.1 получаем разницу чиса 
	//2.2 проверяем в колекции на наличеи ключа ? возвращаем массив : добавляем в колекцию разниуц => index

var twoSum = function(nums, target) {
	let map = new Map()

	for(let i = 0;i < nums.length; i++){
		let difference = target - nums[i] 
		if(map.has(nums[i])){
			return [map.get(nums[i]), i]
		}
		map.set(difference, i)
	} 
};

console.log(twoSum([2,7,11,15], 9)) // [0,1]
console.log(twoSum([3,2,4], 6)) // [1,2]
console.log(twoSum([3,3], 6)) // [0,1]

//!--------------------------------------------------------------------------------------------------------------------

//todo Time O(N^2) | Space O(1)

var twoSum = (nums, target) => {
    for (let curr = 0; curr < nums.length; curr++) {/* Time O(N) */
        const complement = target - nums[curr];

        for (let next = (curr + 1); next < nums.length; next++) {/* Time O(N) */
            const num = nums[next];

            const isTarget = num === complement
            if (isTarget) return [ curr, next ];
        }
    }

    return [ -1, -1 ];
}

console.log(twoSum([2,7,11,15], 9)) // [0,1]
console.log(twoSum([3,2,4], 6)) // [1,2]
console.log(twoSum([3,3], 6)) // [0,1]
//!--------------------------------------------------------------------------------------------------------------------

//todo Time O(N) | Space O(N)

var twoSum = (nums, target) => {
    const map = getMap(nums);       /* Time O(N) | Space O(N) */

    return getSum(nums, target, map)/* Time O(N) */
}

const getMap = (nums, map = new Map()) => {
    for (let index = 0; index < nums.length; index++) {/* Time O(N) */
        map.set(nums[index], index);                   /* Space O(N) */
    }

    return map
}

const getSum = (nums, target, map) => {
    for (let index = 0; index < nums.length; index++) {/* Time O(N) */
        const complement = target - nums[index];
        const sumIndex = map.get(complement);

        const isTarget = map.has(complement) && (map.get(complement) !== index)
        if (isTarget) return [ index, sumIndex ]
    }

    return [ -1, -1 ];
}

console.log(twoSum([2,7,11,15], 9)) // [0,1]
console.log(twoSum([3,2,4], 6)) // [1,2]
console.log(twoSum([3,3], 6)) // [0,1]

//!--------------------------------------------------------------------------------------------------------------------

//todo Time O(N) | Space O(N)

var twoSum = (nums, target, map = new Map()) => {
    for (let index = 0; index < nums.length; index++) {/* Time O(N) */
        const num = nums[index];
        const complement = (target - num);
        const sumIndex = map.get(complement);

        const isTarget = map.has(complement)
        if (isTarget) return [ index, sumIndex ];

        map.set(num, index);                           /* Space O(N) */
    }

    return [ -1, -1 ];
}

console.log(twoSum([2,7,11,15], 9)) // [0,1]
console.log(twoSum([3,2,4], 6)) // [1,2]
console.log(twoSum([3,3], 6)) // [0,1]

//! ====================================================================================================================
//* 49. Group Anagrams

//todo Учитывая массив строк strs, сгруппируйте анаграммы вместе.
//todo Вы можете вернуть ответ в любом порядке.

//todo Анаграмма — это слово или фраза, образованная путем перестановки букв другого слова или фразы, 
//todo бычно с использованием всех исходных букв ровно один раз.

//todo (Arrays)
//! ====================================================================================================================

var groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) {
		let curr = [...str].sort().join('');
		if (!map.has(curr)) map.set(curr, []);
		map.get(curr).push(str);
  	}
  return Array.from(map.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])) // [[""]]
console.log(groupAnagrams(["a"])) // [["a"]]

//!--------------------------------------------------------------------------------------------------------------------

//todo Time O(N * (K * log(K))) | Space O(N * K)

//1 иницилизируем колекцию
//2 проверяем массив на наличие строк и возвращаем пустрой массив при отсутствии строк в массиве
//3 функция groupWords - записывает в колекцию ключ = строке и массив = похожй на строку 
	//3.1 бежит по всем строкам
	//3.2 использует функцию reorder
	//3.3 полечает массив из колекции || создаем пустой массив
	//3.4 дабавляем строку в массив
	//3.5 записываем в колекцию  строку и массив
//4 функця reorder - переставляет символы в алфовитном порядке
	//4.1 превращает строку в массив
	//4.2 переставляет символы в алфовитном порядке
	//4.3 соеденяет сиволы в строку
//5 groupWords(words, map)
//6 return массив с полученными данными в колекции

var groupAnagrams = (words) => {
	let map = new Map()
	
    if (!words.length) return [];

    groupWords(words, map);    /* Time O(N * (K * log(K)) | Space O(N * K) */

    return [ ...map.values() ];/* Time O(N)               | Space O(N * K) */
};

var groupWords = (words, map) => {
    for (const original of words) {/* Time O(N) */
        const sorted = reorder(original);/* Time O(K * log(K)) | Space O(K) */
        const values = map.get(sorted) || [];

        values.push(original);           /*                    | Space O(N) */
        map.set(sorted, values);         /*                    | Space O(N * K) */
    }
}

const reorder = (str) => str
    .split('')                         /* Time O(K)          | Space O(K) */
    .sort((a, b) => a.localeCompare(b))/* Time O(K * log(K)) | Space O(1 || log(K)) */
    .join('');                         /* Time O(K)          | Space O(K) */


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])) // [[""]]
console.log(groupAnagrams(["a"])) // [["a"]]

//!--------------------------------------------------------------------------------------------------------------------

//todo Time O(N * K) | Space O(N * K)

//1 иницилизируем колекцию
//2 проверяем массив на наличие строк и возвращаем пустрой массив при отсутствии строк в массиве
//3 функция groupWords 
	//3.1 бежит по всем строкам
	//3.2 использует функцию getHash
	//3.3 полечает массив из колекции || создаем пустой массив
	//3.4 дабавляем строку в массив
	//3.5 записываем в колекцию строку и массив

//4 функция getHash 
	//4.1 создаем массив с 26 нулями 
	//4.2 бежим по символам в строке 
	//4.3 используем функцию getCode
	//4.4 инкриментируем символ в массиве
	//4.5 используем функцию buildHash

//5 функция getCode 
	//5.1 получаем символ
	//5.2 используем метод charCodeAt(0) для получения числа с позицией символа в алфовите

//6 функция buildHash
	//6.1 получаем массив
	//6.2 с помощю метода toString превращаем символы массива в строку

var groupAnagrams = (words) => {
	map = new Map()

    if (!words.length) return [];

    groupWords(words, map);    /* Time O(N * K) | Space O(N * K) */

    return [ ...map.values() ];/* Time O(N)     | Space O(N * K) */
}

var groupWords = (words, map) => {
    for (const original of words) {/* Time O(N) */
        const hash = getHash(original); /* Time O(K) | Space O(1) */
        const values = map.get(hash) || [];

        values.push(original);          /*           | Space O(N) */
        map.set(hash, values);          /*           | Space O(N * K) */
    }
}

const getHash = (word) => {
    const frequency = new Array(26).fill(0);

    for (const char of word) {/* Time O(K) */
        const charCode = getCode(char);/* Time O(1) | Space (1) */

        frequency[charCode]++;         /*           | Space O(1) */
    }

    return buildHash(frequency)
}

const getCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);
const buildHash = (frequency) => frequency.toString();

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])) // [[""]]
console.log(groupAnagrams(["a"])) // [["a"]]

//! ====================================================================================================================
//* 347. Top K Frequent Elements

//todo Учитывая целочисленный массив nums и целое число k, вернуть k наиболее часто встречающихся элементов.

//todo Вы можете вернуть ответ в любом порядке.

//todo (Arrays)
//! ====================================================================================================================

//todo Time O(NlogN) | Space O(N)

//1 инициализируем обьект
//2 бежим по массиву nums 
	//2.1 если в обьекте присутствует value по key ? value++ || value = 1
//3 инициализируем result = массив с масивами === [key, value] (превращаем обьект в массив)
//4 сортируем result
//5 инициализируем output = массив
//6 бежим по циклу k раз
	//6.1 пушим в output key из отсортированного result
//7 возвращаем output

var topKFrequent = function(nums, k) {
    let frequency = {}
    for( let num of nums){
        if(frequency.hasOwnProperty(num)) {
			frequency[num] += 1;
		} else {
			frequency[num] = 1;
		}
    }

    let result = Object.keys(frequency).map((key) => [Number(key), frequency[key]]);

    let sortedResult = result.sort((a,b) => {
        return b[1]-a[1]
    })

    let output = []
    for ( let i = 0; i < k; i++){
        output.push(sortedResult[i][0])
    }
    return output;
};

console.log(topKFrequent([1,1,1,2,2,3], 2)) // [1,2]
console.log(topKFrequent([1], 1)) // [1]

//!--------------------------------------------------------------------------------------------------------------------

//todo Time O(N) | Space O(k)

var topKFrequent = function(nums, k) {
    const map = new Map();
    const arr = new Array(nums.length + 1).fill(0);
    const result = [];

    nums.forEach(num => {
        const val = map.get(num) || 0;
        map.set(num, val + 1);
    });

    for ( let [key, value] of map ) {
        const prev = arr[value] || [];
        prev.push(key);
        arr[value] = prev;
    }
	console.log(arr)
    arr.reverse();
	console.log(arr)

    for (let arrNum of arr) {
        if (k < 1) break;
        if (arrNum) {
            for (let num of arrNum) {
                if (k < 1) break;
                result.push(num);
                k--;
            }
        }
    }

    return result;
};

console.log(topKFrequent([1,1,1,2,2,3], 2)) // [1,2]
console.log(topKFrequent([1], 1)) // [1]

//! ====================================================================================================================
//* 238. Product of Array Except Self

//todo Учитывая целочисленный массив nums, вернуть массив ответа, что answer[i] равен произведению всех элементов nums, кроме nums[i].

//todo Произведение любого префикса или суффикса чисел гарантированно соответствует 32-битному целому числу.

//todo Вы должны написать алгоритм, который работает за время O(n) и не использует операцию деления.

//todo (Arrays)
//! ====================================================================================================================

//todo Time O(N) | Space O(N)

//1 инициализируем массив result = []
//2 инициализируем prefix = 1
//3 инициализируем postfix = 1
//4 бежим по массиву nums
	//4.1 дабавляем в result = prefix
	//4.2 prefix = prefix * num
//5

function productExceptSelf(nums) {
    const result = []; // [1, 1, 2, 6]
    let prefix = 1; 
    let postfix = 1; 
    
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        postfix *= nums[i + 1];
		console.log(postfix, i)
        result[i] *= postfix;
    }
    return result;
};

console.log(productExceptSelf([1,2,3,4])) // [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])) // [0,0,9,0,0]
//! ====================================================================================================================
//* 36. Valid Sudoku

//todo Определите, действительна ли доска судоку 9 x 9. Только заполненные ячейки должны быть проверены в соответствии со следующими правилами:

//todo 1. Каждая строка должна содержать цифры 1–9 без повторения.
//todo 2. Каждый столбец должен содержать цифры 1–9 без повторения.
//todo 3. Каждый из девяти подблоков сетки 3 x 3 должен содержать цифры 1–9 без повторения.

//todo Note:
//todo Доска судоку (частично заполненная) может быть действительной, но не обязательно решаемой.
//todo Только заполненные ячейки должны быть проверены в соответствии с указанными правилами.

//todo (Arrays)
//! ====================================================================================================================

//todo Time O(ROWS * COLS) | Space O(ROWS * COLS)

//1 инициализируем doards = 3
//2 функция boards
	//2.1 инициализируем массив [9, 9]
	//2.2 return массив 
	//2.3
	//2.4
	//2.5
//3 функция initBoard
	//3.1
	//3.2
	//3.3
//4 функция searchGrid
	//4.1 бежим по матрице board
	//4.2 	
	//4.3
//5
//6

var isValidSudoku = (board) => {
    const boards = 3;
    const [ boxes, cols, rows ] = getBoards(boards);/* Time O(ROWS * COLS) | Space O(ROWS * COLS) */

    return searchGrid(board, boxes, cols, rows);    /* Time O(ROWS * COLS) | Space O(ROWS * COLS) */
};

var getBoards = (boards) => {
    const [ rows, cols ] = [ 9, 9 ];

    return new Array(boards).fill()
        .map(() => initBoard(rows, cols))
}
var initBoard = (rows, cols) => new Array(rows).fill()
    .map(() => new Array(cols).fill(false));


var searchGrid = (board, boxes, cols, rows) => {
    const [ _rows, _cols ] = [ 9, 9 ];

    for (let row = 0; row < _rows; row++) {/* Time O(ROWS)*/
        for (let col = 0; col < _cols; col++) {/* Time O(COLS)*/
            const char = board[row][col];
            const index = (Math.floor(row / 3) * 3) + Math.floor(col / 3);
			console.log(index)

            const isEmpty = char === '.';
            if (isEmpty) continue;

            const hasMoved = boxes[index][(char - 1)] || cols[col][(char - 1)] || rows[row][(char - 1)];
            if (hasMoved) return false;

            rows[row][(char - 1)] = true;               /* Space O(ROWS * COLS)*/
            cols[col][(char - 1)] = true;               /* Space O(ROWS * COLS)*/
            boxes[index][(char - 1)] = true;            /* Space O(ROWS * COLS)*/
        }
    }

    return true;
}


console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
						  ,["6",".",".","1","9","5",".",".","."]
						  ,[".","9","8",".",".",".",".","6","."]
						  ,["8",".",".",".","6",".",".",".","3"]
						  ,["4",".",".","8",".","3",".",".","1"]
						  ,["7",".",".",".","2",".",".",".","6"]
						  ,[".","6",".",".",".",".","2","8","."]
						  ,[".",".",".","4","1","9",".",".","5"]
						  ,[".",".",".",".","8",".",".","7","9"]])) // true

console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
						  ,["6",".",".","1","9","5",".",".","."]
						  ,[".","9","8",".",".",".",".","6","."]
						  ,["8",".",".",".","6",".",".",".","3"]
						  ,["4",".",".","8",".","3",".",".","1"]
						  ,["7",".",".",".","2",".",".",".","6"]
						  ,[".","6",".",".",".",".","2","8","."]
						  ,[".",".",".","4","1","9",".",".","5"]
						  ,[".",".",".",".","8",".",".","7","9"]])) // false

//!--------------------------------------------------------------------------------------------------------------------

//todo Time O(ROWS * COLS) | Space O(CELLS)

var isValidSudoku = (board) => {
    const [ boards, cells ] = [ 3, 9];
    const [ boxes, rows, cols ] = getBoards(boards, cells);/* Time O(ROWS * COLS) | Space O(CELLS) */

    return searchGrid(board, boxes, rows, cols);           /* Time O(ROWS * COLS) | Space O(CELLS) */
}

var getBoards = (boards, cells) => new Array(boards).fill()
    .map(() => new Array(cells).fill(0));

var searchGrid = (board, boxes, rows, cols) => {
    const [ _rows, _cols ] = [ 9, 9 ];

    for (let row = 0; row < _rows; row++) {/* Time O(ROWS)*/
        for (let col = 0; col < _cols; col++) {/* Time O(COLS)*/
            const char = board[row][col];
            const position = 1 << (char - 1);
            const index = (Math.floor(row / 3) * 3) + Math.floor(col / 3);

            const isEmpty = char === '.';
            if (isEmpty) continue;

            const hasMoved = (boxes[index] & position) || (cols[col] & position) || (rows[row] & position);
            if (hasMoved) return false;

            rows[row] |= position;                 /* Space O(CELLS)*/
            cols[col] |= position;                 /* Space O(CELLS)*/
            boxes[index] |= position;              /* Space O(CELLS)*/
        }
    }

    return true;
}

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
						  ,["6",".",".","1","9","5",".",".","."]
						  ,[".","9","8",".",".",".",".","6","."]
						  ,["8",".",".",".","6",".",".",".","3"]
						  ,["4",".",".","8",".","3",".",".","1"]
						  ,["7",".",".",".","2",".",".",".","6"]
						  ,[".","6",".",".",".",".","2","8","."]
						  ,[".",".",".","4","1","9",".",".","5"]
						  ,[".",".",".",".","8",".",".","7","9"]])) // true

console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
						  ,["6",".",".","1","9","5",".",".","."]
						  ,[".","9","8",".",".",".",".","6","."]
						  ,["8",".",".",".","6",".",".",".","3"]
						  ,["4",".",".","8",".","3",".",".","1"]
						  ,["7",".",".",".","2",".",".",".","6"]
						  ,[".","6",".",".",".",".","2","8","."]
						  ,[".",".",".","4","1","9",".",".","5"]
						  ,[".",".",".",".","8",".",".","7","9"]])) // false

//! ====================================================================================================================
//* 128. Longest Consecutive Sequence

//todo Учитывая несортированный массив целых чисел nums, вернуть длину самой длинной последовательности последовательных элементов.

//todo Вы должны написать алгоритм, работающий за время O(n).

//todo (Arrays)
//! ====================================================================================================================

var longestConsecutive = function(nums) {
    nums.sort((a,b) => {a - b})
};

console.log(longestConsecutive([100,4,200,1,3,2])) // 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])) // 9


//!--------------------------------------------------------------------------------------------------------------------

//todo Time O (N) | Space O(N)

var longestConsecutive = (nums) => {
	let maxScore = 0
    const numSet = new Set(nums);         /* Time O(N) | Space O(N) */

    for (const num of [ ...numSet ]) {    /* Time O(N) */
        const prevNum = num - 1;

        if (numSet.has(prevNum)) continue;/* Time O(N) */
		
        let [ currNum, score ] = [ num, 1 ];

        while (numSet.has(currNum + 1)) {              /* Time O(N) */

            currNum++;
            score++;
        }
        maxScore = score
    }

    return maxScore;
}

console.log(longestConsecutive([100,4,200,1,3,2])) // 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])) // 9

//! ====================================================================================================================
//* 1299. Replace Elements with Greatest Element on Right Side 

//todo Учитывая массив arr, замените каждый элемент в этом массиве самым большим элементом среди элементов справа от него, 
//todo а последний элемент замените на -1. После этого верните массив.

//todo (Arrays)
//! ====================================================================================================================

//todo O(N) | O(1)

//1 Иницилизируем перемную max c последним значением массива
//2 Меняем значение последнего элемнта массива на -1
//3 запускаем цикл с конца массива начиная с предпоследнего элемнта //[length = 6] 4, 3, 2, 1, 0
	//3.1 сохраняем значение массива по данной итерации 
	//3.2 заменяем ее на max 
	//3.3 если значение по текущей итерации больше max ? меняем значение max
//3 return arr

var replaceElements = function(arr) {
    let max = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
    
    for(let i = arr.length - 2; i >= 0; i--) {
        let curr = arr[i];
        arr[i] = max;
        if(curr > max) max = curr;
    }
    
    return arr;
};

console.log(replaceElements([17,18,5,4,6,1])) // [18,6,6,6,1,-1]
console.log(replaceElements([400])) // [-1]

//! ====================================================================================================================
//* 58. Length of Last Word 
//todo Для заданной строки s, состоящей из слов и пробелов, вернуть длину последнего слова в строке. 
//todo Слово – это максимальное подстрока состоящая только из не пробельных символов.
 
//todo (Arrays)
//! ====================================================================================================================

//1 иницилизируем counter = 0 O(1)
//2 бежим по строке с последнего элемнта O(N)
	//1.1 если последний символ === ' ' ?  continue
	//1.2 если символ ? counter++ else if ' ' return counter
//3 return counter


var lengthOfLastWord = function(s) {
	let counter = 0
	let isEnd = s[s.length -1] === ' '

	for(let i = s.length -1; i >= 0; --i) {

		if (s[i] !== ' ') {
			counter++ 
			isEnd = false
		} else if (isEnd){
			continue
		} else {
			return counter
		}
	}
	return counter
};

console.log(lengthOfLastWord("   fly me   to   the moon  ")) // 4
console.log(lengthOfLastWord("Hello World")) // 5
console.log(lengthOfLastWord("luffy is still joyboy")) // 6

//! ====================================================================================================================
//* 14. Longest Common Prefix 

//todo Напишите функцию, которая находит самую длинную строку общего префикса среди массива строк. 
//todo Если общего префикса нет, вернуть пустую строку "".

//todo (Arrays)
//! ====================================================================================================================
 
//1 иницилизируем подстроку
//2 запускаем цикл по массиву со строками
	//2.1 запускаем цикл с конца подстроки 
		//2.1.1 если символ подстроки !== символу из строки взятой в массиве ? вырезаем символ из подстроки
//3	return подстроку


var longestCommonPrefix = function(strs) {
    
    let pre = strs[0]; // O(N)
    
    for(let word of strs) { // O(N^2)
                
        for(let i = pre.length - 1; i >= 0; i--) {
                             
            if(pre[i] !== word[i]) {
                pre = pre.slice(0, i);
            }
        } 
    }
    
    return pre;
};

console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])) // ""


//! ====================================================================================================================
//* 118. Pascals Triangle 

//todo Учитывая целое число numRows, вернуть первые numRows треугольника Паскаля. 
//todo В треугольнике Паскаля каждое число является суммой двух чисел непосредственно над ним.

//todo (Arrays)
//! ====================================================================================================================

//1 иницилизируем пустой arr 
//2 есил num >= 2 пушим в массив первый и второ элемнт треугольника 
//3 если num > 2 запускаем цикл 2 < num
	//3.1 иницилизируем подмассив 
	//3.2 в подмассив пушим 1
	//3.3 запускаем цикл по предыдущей ветке триугольника
		//3.3.1 в подмассив пушим arr[1\2\3\4\...][1\2\3\4\...] + arr[1\2\3\4\...][2\3\4\5\...]
	//3.4 в подмассив пушим 1
	//3.4 в массив пушим подмассив
//4 return  arr

var generate = function(num) {
    const arr = [];
    if (num >= 2) {
      arr.push([1]);
      arr.push([1, 1]);
    } else {
      arr.push([1]);
    }
  

    if (num > 2) {
      for (let i = 2; i < num; i++) {
        let subArray = [];
         subArray.push(1);
        for (let j = 0; j < arr[i - 1].length - 1; j++) {
          subArray.push(arr[i - 1][j] + arr[i - 1][j + 1]);
        }
        subArray.push(1);
        arr.push(subArray);
      }
    }
  
    return arr;
};

console.log(generate(5)) // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)) // [[1]]

//! ====================================================================================================================
//* 27. Remove Element 

//todo Учитывая целочисленный массив nums и целочисленное val, удалите все вхождения val в nums на месте. 
//todo Порядок элементов может быть изменен. Затем верните количество элементов в nums, которые не равны val.

//todo Рассмотрим количество элементов в nums, которые не равны val be k, чтобы вас приняли, вам нужно сделать следующее:

//todo Измените массив nums так, чтобы первые k элементов nums содержали элементы, не равные val. 
//todo Остальные элементы nums не важны, как и размер nums.

//todo Вернуться к.

//todo (Arrays)
//! ====================================================================================================================


//1 бежим по массиву nums 
	//2.1 проверяем num === val ? удаляем элемнт по индексу и декрементируем индекс цикла (i--)
//2 возвращаем длину массива


var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            nums.splice(i, 1);
            i--;            
        }
    }
    
    return nums.length;
};

console.log(removeElement([3,2,2,3], 3)) // 2
console.log(removeElement([0,1,2,2,3,0,4,2], 2)) // 5

//! ====================================================================================================================
//* 205. Isomorphic Strings 

//todo Имея две строки s и t, определите, изоморфны ли они.
//todo Две строки s и t изоморфны, если символы в s можно заменить, чтобы получить t.

//todo Все вхождения символа должны быть заменены другим символом с сохранением порядка символов.
//todo Никакие два символа не могут отображаться на один и тот же символ, но символ может отображаться на самого себя.

//todo (Arrays)
//! ====================================================================================================================

//1 если длина строк не равна return false
//2 иницилизируем колекцию для первой и второй строки
//3 запускаем цикл по любой из строк
	//3.1 проверяем наличие буквы в колекции первой строки ? или же добавляем в колекцию первой строки key = s[i] value = t[i]
		//3.1.1 проверяем значение из колекции первой строки !== текущим значением из второй строки ? return false
	//3.2 проверяем наличие буквы в колекции второй строки ? или же добавляем в колекцию второй строки key = t[i] value = s[i]
		//3.2.1 проверяем значение из колекции второй строки !== текущим значением из первой строки ? return false
//4	return true

// ГЛАВНОЕ: если буква a = t и t = a других пар у букв не может быть при смене пары return false  (у каждой буквы есть своя пара которая не может измениться)
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;

    const mapOne = new Map(); 
    const mapTwo = new Map();

    for (let i = 0; i < s.length; i++) {
        if (mapOne.has(s[i])) {
            if (mapOne.get(s[i]) !== t[i]) return false;
        } else mapOne.set(s[i], t[i]);

        if (mapTwo.has(t[i])) {
            if (mapTwo.get(t[i]) !== s[i]) return false;
        } else mapTwo.set(t[i], s[i]);
    }
	console.log(mapOne, mapTwo)
    return true;
};

console.log(isIsomorphic("paper", "title")) // true
console.log(isIsomorphic("badc", "baba")) // false
console.log(isIsomorphic("egg", "add")) // true
console.log(isIsomorphic("foo", "bar")) // false


//! ====================================================================================================================
//* 605. Can Place Flowers 

//todo У вас есть длинная клумба, в которой часть участков засажена, а часть нет. 
//todo Однако цветы нельзя сажать на соседних участках.

//todo Дан целочисленный массив клумбы, содержащий 0 и 1, где 0 означает пустую, 
//todo а 1 означает непустую, и целое число n, вернуть true, если n новых цветов можно посадить на клумбе, 
//todo не нарушая правило отсутствия соседних цветов, и false в противном случае.


//todo (Arrays)
//! ====================================================================================================================

//1 елси n === 0 return true
//2 бежим по массиву 
	//2.1 елси n === 0 return true
	//2.2 елси первый элемнт массива & следующий === 0 ? меняем значение в массиве на 1 & декрементируем n 
	//2.3 елси последний элемнт массива & предыдущий === 0 ? меняем значение в массиве на 1 & декрементируем n 
	//2.4 елси предыдущий и следующие и текущий элемнты массива === 0 ? меняем значение в массиве на 1 & декрементируем n
	//2.5 елси n === 0 return true
//3 return false

var canPlaceFlowers = function(flowerbed, n) {

	for(let i = 0; i < flowerbed.length; i++) {
		if(n === 0) return true

		if(i === 0 && !flowerbed[i] && !flowerbed[i+1]) {
			flowerbed[i] = 1
			n--
		}
		if(i === flowerbed.length-1 && !flowerbed[i] && !flowerbed[i-1]) {
			flowerbed[i] = 1
			n--
		}
		if(!flowerbed[i-1] && !flowerbed[i+1] && !flowerbed[i]) {
			flowerbed[i] = 1
			n--
		}
		if(n === 0) return true

	}
	
	return false
};


console.log(canPlaceFlowers([0,0,1,0,0], 1)) // true
console.log(canPlaceFlowers([1,0,1,0,0], 1)) // true
console.log(canPlaceFlowers([1,0,0,0,0,1], 2)) // false
console.log(canPlaceFlowers([1,0,0,0,1], 1)) // true
console.log(canPlaceFlowers([1,0,0,0,1], 2)) // false


//! ====================================================================================================================
//* 169. Majority Element 

//todo Учитывая массив nums размера n, вернуть мажоритарный элемент.

//todo Элемент большинства — это элемент, который встречается более ⌊n / 2⌋ раз. 
//todo Вы можете предположить, что в массиве всегда существует мажоритарный элемент.

//todo (Arrays)
//! ====================================================================================================================

//1 иницилизируем колекцию
//2 бежим по массиву 
	//2.1 если в колекции есть ключ по текущему значению в массиве ? инкрементируем значение в колекции || добавляем новый ключ со значением 1
//3 бежим по колекции 
	//3.1 если значение > длины массива поделенной на 2 ? return key


var majorityElement = function(nums) {
    let map = new Map()
	for(let i =0; i < nums.length; i++) {
		if (map.has(nums[i])) {
			map.set(nums[i], map.get(nums[i]) + 1)
		} else {
			map.set(nums[i], 1)
		}
	}

	let num = 0
	for(let [key, value] of map) {
		if (value > nums.length / 2) return key
	}
};

console.log(majorityElement([3,2,3])) // 3
console.log(majorityElement([2,2,1,1,1,2,2])) // 2

//! ====================================================================================================================
//* 496. Next Greater Element I 


//todo Следующий больший элемент некоторого элемента x в массиве — это первый больший элемент,
//todo который находится справа от x в том же массиве.

//todo Вам даны два различных массива целых чисел с нулевым индексом nums1 и nums2, где nums1 является подмножеством nums2.

//todo Для каждого 0 <= i < nums1.length найдите индекс j такой, что nums1[i] == nums2[j], 
//todo и определите следующий больший элемент nums2[j] в nums2. Если следующего большего элемента нет, то ответ на этот запрос равен -1.

//todo Возвращает массив ans длины nums1.length так, чтобы ans[i] был следующим большим элементом, как описано выше.

//todo (Arrays)
//! ====================================================================================================================

var nextGreaterElement = function(nums1, nums2) {
    
};

console.log([4,1,2], [1,3,4,2]) // [-1,3,-1]
console.log([2,4], [1,2,3,4]) // [3,-1]

//! ====================================================================================================================
//* 724. Find Pivot Index 

//todo Учитывая массив целых чисел, вычислить опорный индекс этого массива.

//todo Сводной индекс — это индекс, в котором сумма всех чисел строго слева от индекса равна сумме всех чисел строго справа от индекса.

//todo Если индекс находится на левом краю массива, то левая сумма равна 0, потому что слева нет элементов. 
//todo Это также относится к правому краю массива. 

//todo Возвращает самый левый опорный индекс. Если такого индекса не существует, вернуть -1.

//todo (Arrays)
//! ====================================================================================================================

var pivotIndex = function(nums) {
    
};

console.log(pivotIndex([1,7,3,6,5,6])) // 3
console.log(pivotIndex([1,2,3])) // -1
console.log(pivotIndex([2,1,-1])) // 0

//! ====================================================================================================================
//* 448. Find All Numbers Disappeared in an Array https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

//todo Учитывая массив nums из n целых чисел, где nums[i] находится в диапазоне [1, n], 
//todo вернуть массив всех целых чисел в диапазоне [1, n], которые не появляются в nums.

//todo (Arrays)
//! ====================================================================================================================

var findDisappearedNumbers = function(nums) {

}

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])) // [5,6]
console.log(findDisappearedNumbers([1,1])) // [2]	