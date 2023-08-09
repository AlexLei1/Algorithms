//! ====================================================================================================================
//* 125. Valid Palindrome

//todo Фраза является палиндромом, если после преобразования всех прописных букв в строчные и удаления всех не буквенно-цифровых символов,
//todo он читается одинаково вперед и назад. Буквенно-цифровые символы включают буквы и цифры.

//todo Учитывая строку s, вернуть true, если это палиндром, или false в противном случае.

//todo (Two Pointers)
//! ====================================================================================================================

//todo Time O(N) | Space O(N)


var isPalindrome = function(s) {
    if (!s.length) return true;
    
    const alphaNumeric = filterAlphaNumeric(s);/* Time O(N) | Space O(N) */
    const reversed = reverse(alphaNumeric);    /* Time O(N) | Space O(N) */
    
    return alphaNumeric === reversed;
};

const filterAlphaNumeric = (s, nonAlphaNumeric = new RegExp('[^a-z0-9]','gi')) => s
    .toLowerCase()               /* Time O(N) | Space O(N) */
    .replace(nonAlphaNumeric, '')/* Time O(N) | Space O(N) */

const reverse = (s) => s
    .split('')/* Time O(N) | Space O(N) */
    .reverse()/* Time O(N) | Space O(N) */
    .join('');/* Time O(N) | Space O(N) */


console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome("race a car")) // false
console.log(isPalindrome(" ")) // true

//!--------------------------------------------------------------------------------------------------------------------

//todo Time O(N) | Space O(1)

var isPalindrome = function(s) {
    if (s.length <= 1) return true;
    
    let [left, right] = [0, s.length - 1];
    let leftChar, rightChar;
    while (left < right) {
        leftChar = s[left];
        rightChar = s[right];
        
        // skip char if non-alphanumeric
        if (!/[a-zA-Z0-9]/.test(leftChar)) {
            left++;
        } else if (!/[a-zA-Z0-9]/.test(rightChar)) {
            right--;
        } else {
            // compare letters
            if (leftChar.toLowerCase() != rightChar.toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome("race a car")) // false
console.log(isPalindrome(" ")) // true

//!--------------------------------------------------------------------------------------------------------------------

//todo Time O(N) | Space O(1)

var isPalindrome = function (s) {
	const isAlphaNumeric = c => (c.toLowerCase() >= 'a' && c.toLowerCase() <= 'z') || c >= '0' && c <= '9'
  
	let left = 0;
	let right = s.length - 1;
	let skipLeft, skipRight, endsEqual = false;
	
	while (left < right) {
	  skipLeft = !isAlphaNumeric(s.charAt(left))
	  if (skipLeft) { left++; continue; }
  
	  skipRight = !isAlphaNumeric(s.charAt(right))
	  if (skipRight) { right--; continue; }
  
	  endsEqual = s.charAt(left).toLowerCase() === s.charAt(right).toLowerCase()
	  if (!endsEqual) return false
  
	  left++
	  right--
	}
	return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome("race a car")) // false
console.log(isPalindrome(" ")) // true

//! ====================================================================================================================
//* 167. Two Sum II - Input Array Is Sorted

//todo Дан массив целых чисел с индексом 1, который уже отсортирован в порядке неубывания,
//todo найдите два числа, которые в сумме дают определенное целевое число.
//todo Пусть эти два числа будут числами[индекс1] и числами[индекс2], где 1 <= индекс1 <индекс2 <числа.длина.

// todo Возвращает индексы двух чисел, index1 и index2, сложенные на единицу, в виде целочисленного массива [index1, index2] длины 2.

// todo Тесты генерируются таким образом, что существует ровно одно решение. Вы не можете использовать один и тот же элемент дважды.

// todo Ваше решение должно использовать только постоянное дополнительное пространство.

//todo (Two Pointers)
//! ====================================================================================================================

//todo Time O(N) | Space O(1)

var twoSum = function (numbers, target) {
    let [left, right] = [0, numbers.length - 1];

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        const isTarget = sum === target;
        if (isTarget) return [left + 1, right + 1];

        const isTargetGreater = sum < target;
        if (isTargetGreater) left++;

        const isTargetLess = target < sum;
        if (isTargetLess) right--;
    }

    return [-1, -1];
};

console.log(twoSum([2,7,11,15], 9)) // [1.2]
console.log(twoSum([2,3,4], 6)) // [1,3]
console.log(twoSum([-1, 0], -1)) // [1,2]

//! ====================================================================================================================
//* 15. 3Sum

//todo Для массива целых чисел nums вернуть все триплеты [nums[i], nums[j], nums[k]] такие, 
//todo что i != j, i != k и j != k, и nums[i] + числа [j] + числа [k] == 0.

//todo (Two Pointers)
//! ====================================================================================================================

var threeSum = function(nums) {
    const res = [];
    nums.sort((a,b) => a-b)

    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];
        if (a > 0) break;
        if (i > 0 && a === nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const threeSum = a + nums[l] + nums[r];
            if (threeSum > 0) {
                r--;
            } else if (threeSum < 0) {
                l++;
            } else {
                res.push([a, nums[l], nums[r]]);
                l++;
                r--;
                while (nums[l] === nums[l - 1] && l < r) {
                    l++;
                }
            }
        }
    }
    return res;
}

console.log(threeSum([-1,0,1,2,-1,-4])) // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])) // []

//! ====================================================================================================================
//* 11. Container With Most Water

//todo Вам дан целочисленный массив высоты длины n. Нарисовано n вертикальных линий, 
//todo две конечные точки i-й линии равны (i, 0) и (i, height[i]).

//todo Найдите две линии, которые вместе с осью абсцисс образуют контейнер, содержащий наибольшее количество воды.

//todo Возвращает максимальное количество воды, которое может храниться в контейнере.

//todo Обратите внимание, что вы не можете наклонять контейнер.

//todo (Two Pointers)
//! ====================================================================================================================

//todo Time O(N) | Space(1)

var maxArea = function (height) {
    let [left, right, max] = [0, height.length - 1, 0];

    while (left < right) {
        const [leftHeight, rightHeight] = getHeights(height, left, right);
        const area = getArea(height, left, right);

        max = Math.max(max, area);

        const isRightGreater = leftHeight <= rightHeight;
        if (isRightGreater) left++;

        const isRightLess = rightHeight < leftHeight;
        if (isRightLess) right--;
    }

    return max;
};

const getHeights = (height, left, right) => [height[left], height[right]];

const getArea = (height, left, right) => {
    const [leftHeight, rightHeight] = getHeights(height, left, right);
    const _height = Math.min(leftHeight, rightHeight);
    const width = right - left;

    return _height * width;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49
console.log(maxArea([1,1])) // 1

//! ====================================================================================================================
//* 42. Trapping Rain Water

//todo Имея n неотрицательных целых чисел, представляющих карту высот, где ширина каждой полосы равна 1,
//todo вычислите, сколько воды она может собрать после дождя.

//todo (Two Pointers)
//! ====================================================================================================================

//todo Time O(n) | Space O(n) 

var trap = function(height) {
    
    const maxLeft = [];
    const maxRight = [];
    const minLeftRight = [];

    let current = 0;
    for(let i = 0; i < height.length; i++) {
     maxLeft.push(current);
     current  = Math.max(current, height[i]);
    }
    current = 0;
    for(let i = height.length - 1; i > -1; i--) {
        maxRight.push(current);
        current = Math.max(current, height[i]);
    }
    // because the elements were added reverse. 
    maxRight.reverse();

    for(let i = 0; i < height.length; i++) {
        const minofLeftRight = Math.min(maxLeft[i],maxRight[i]);
        minLeftRight.push(minofLeftRight);
    }

    let water = 0;
    for(let i = 0; i < height.length; i++) {
        if(minLeftRight[i] - height[i] > 0) {
            water += minLeftRight[i] - height[i];
        }
    }

    return water;
};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
console.log(trap([4,2,0,3,2,5])) // 9

//!--------------------------------------------------------------------------------------------------------------------

//todo Time O(N) | Space O(1)

var trap = function (height) {
    let [left, right] = [0, height.length - 1];
    let [maxLeft, maxRight, area] = [0, 0, 0];

    while (left < right) {
        const [leftHeight, rightHeight] = getHeights(height, left, right);
        const [leftWindow, rightWindow] = getWindows(
            height,
            left,
            maxLeft,
            right,
            maxRight
        );

        const isRightGreater = leftHeight <= rightHeight;
        if (isRightGreater) {
            if (hasNewMax(maxLeft, leftHeight)) maxLeft = leftHeight;
            else area += leftWindow;

            left++;
        }

        const isRightLess = rightHeight < leftHeight;
        if (isRightLess) {
            if (hasNewMax(maxRight, rightHeight)) maxRight = rightHeight;
            else area += rightWindow;

            right--;
        }
    }

    return area;
};

const hasNewMax = (max, height) => max < height;

const getHeights = (height, left, right) => [height[left], height[right]];

const getWindows = (height, left, maxLeft, right, maxRight) => {
    const [leftHeight, rightHeight] = getHeights(height, left, right);
    const [leftWindow, rightWindow] = [
        maxLeft - leftHeight,
        maxRight - rightHeight,
    ];

    return [leftWindow, rightWindow];
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
console.log(trap([4,2,0,3,2,5])) // 9

//! ====================================================================================================================