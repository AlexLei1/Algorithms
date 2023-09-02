//! ====================================================================================================================
//* 125. Valid Palindrome

//todo Фраза является палиндромом, если после преобразования всех прописных букв в строчные и удаления всех не буквенно-цифровых символов,
//todo он читается одинаково вперед и назад. Буквенно-цифровые символы включают буквы и цифры.

//todo Учитывая строку s, вернуть true, если это палиндром, или false в противном случае.

//todo (Two Pointers)
//! ====================================================================================================================

//1 убираем из предложения пробелы, спецсимволы и приводим к нижнему регистру
//2 иницилизируем правый и левый указатели
//3
//4
//Time O(N) | Space O(N)

var isPalindrome = function(s) {
	if(s.length = 0) { //0(1)
		return true
	}
	let str = s.toLowerCase().replace(/[^a-z0-9]/g, "") //0(N)
	let strArr = str.split('')
  	let [left, right] = [0, str.length -1]

	while(left < right) { //0(N)
		[strArr[left], strArr[right]] = [strArr[right], strArr[left]]
		left++ 
		right--
	}

	let strTwo = strArr.join('') //0(N)
	if(str === strTwo) { //0(1)
		return true
	} return false
};

console.log(isPalindrome("race a car")) // false
console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome("0P")) // true
console.log(isPalindrome("abba")) // true
console.log(isPalindrome("abx")) // false
console.log(isPalindrome("race a car")) // false


//! ====================================================================================================================
//* 680. Valid Palindrome II

//todo Учитывая строку s, верните true, если s может быть палиндромом после удаления из нее не более одного символа.

//todo (Two Pointers)
//! ====================================================================================================================

//1 иницилизируем дваукзателя left right 
//2 запускаем цикл по строке
	//2.1 если left !== right && counter ? удаляем чило из строки и counter = 0 : перестовляем элемнты местами
	//2.2
//3
//4
//5

var validPalindrome = function(s) {
    let [left, right] = [0, high = s.length-1]
    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindrome(s, left+1, right) || isPalindrome(s, left, right-1);
        }
        left++, right--;
    }
    return true;
};

function isPalindrome(str, left, right) {
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++, right--;
    }
    return true;
}

console.log(validPalindrome("aba")) // true
console.log(validPalindrome("abca")) // true
console.log(validPalindrome("abc")) // false

//! ====================================================================================================================
//* 1984. Minimum Difference Between Highest and Lowest of K Scores

//todo Вам дан целочисленный массив nums с индексом 0, где nums[i] представляет собой оценку i-го ученика. Вам также дано целое число k.

//todo Выберите баллы любых k студентов из массива так, чтобы разница между самым высоким и самым низким из k баллов была минимизирована.

//todo Вернуть минимально возможную разницу.

//todo (Two Pointers)
//! ====================================================================================================================

var minimumDifference = function(nums, k) {

};

console.log(minimumDifference([90], 1)) // 0
console.log(minimumDifference([9,4,1,7], 2)) // 2

//! ====================================================================================================================
//* 1768. Merge Strings Alternately

//todo Вам даны две строки word1 и word2. Объедините строки, добавляя буквы в чередующемся порядке, начиная со word1.
//todo Если строка длиннее другой, добавьте дополнительные буквы в конец объединенной строки.

//todo Верните объединенную строку.

//todo (Two Pointers)
//! ====================================================================================================================

//1 иницилизируем два указателся для двух строк
//2 иницилизируем массив result
//3 ищем самыую длинную строку 
//4 запускаем цикл по самой длинной строке 
	//4.1 если word1[i] !== undefined ? пушим в массив
	//4.2 если word2[i] !== undefined ? пушим в массив
//5 return result.join()

var mergeAlternately = function(word1, word2) {
   let result = ''
   let leng = Math.max(word1.length, word2.length)

	for(let i = 0; i < leng; i++) {
		if(word1[i] !== undefined) {
			result += word1[i]
		}
		if(word2[i] !== undefined) {
			result += word2[i]
		}
	}

	return result
};

console.log(mergeAlternately("abc", "pqr")) // "apbqcr" 
console.log(mergeAlternately("ab", "pqrs")) // "apbqrs" 
console.log(mergeAlternately("abcd", "pq")) // "apbqcd"

//! ====================================================================================================================
//* 344. Reverse String

//todo Напишите функцию, которая переворачивает строку. Входная строка задается как массив символов s.

//todo Вы должны сделать это, изменив входной массив на месте с дополнительной памятью O (1).

//todo (Two Pointers)
//! ====================================================================================================================

//1 иницилизируем два указателя 
//2 запускаем цикл wilde (left < right)
	// в s меняем значения местами 
//3 return s


var reverseString = function(s) {
	let [left, right] = [0, s.length-1]

	while(left < right){
		[s[left], s[right]] = [s[right], s[left]]
		left++
		right--
	}
	return s
};

console.log(reverseString(["h","e","l","l","o"]))  // ["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"]))  // ["h","a","n","n","a","H"]

//! ====================================================================================================================
//* 88. Merge Sorted Array

//todo Вам даны два целочисленных массива nums1 и nums2, отсортированные в порядке неубывания, и два целых числа m и n, 
//todo представляющие количество элементов в nums1 и nums2 соответственно.

//todo Объедините nums1 и nums2 в один массив, отсортированный в неубывающем порядке.

//todo Окончательно отсортированный массив не должен возвращаться функцией, а должен храниться внутри массива nums1. 
//todo Чтобы учесть это, nums1 имеет длину m n, где первые m элементов обозначают элементы, которые следует объединить, 
//todo а последние n элементов имеют значение 0 и их следует игнорировать. nums2 имеет длину n.

//todo (Two Pointers)
//! ====================================================================================================================

//1
//2
//3
//4
//5

var merge = function(nums1, m, nums2, n) {
    
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)) // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)) // [1]
console.log(merge([0], 0, [1], 1)) // [1]