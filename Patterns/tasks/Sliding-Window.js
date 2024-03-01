//! ====================================================================================================================
//* 121. Best Time to Buy and Sell Stock

//todo Вам дан массив цен, где цены[i] — цена данной акции на i-й день.

//todo Вы хотите максимизировать свою прибыль, выбрав один день для покупки одной акции и выбрав другой день в будущем для продажи этой акции.

//todo Верните максимальную прибыль, которую вы можете получить от этой сделки. Если вы не можете получить никакой прибыли, верните 0.

//todo (Sliding Window)
//! ====================================================================================================================

//todo Time O(N) | Space O(1)

var maxProfit = function (prices) {
    let [left, right, max] = [0, 1, 0];

    while (right < prices.length) {
        const canSlide = prices[right] <= prices[left];
        if (canSlide) left = right;

        const window = prices[right] - prices[left];

        max = Math.max(max, window);
        right++;
    }

    return max;
};

console.log(maxProfit([7,1,5,3,6,4])) // 5
console.log(maxProfit([7,6,4,3,1])) // 0

//!--------------------------------------------------------------------------------------------------------------------

// todo Time O(N) | Space O(1)

var maxProfit = function (prices) {
    let min = prices[0];
    let max = min;
    let value = 0;
    for (let i = 0; i < prices.length; i++) {
        if (i != prices.length - 1 && prices[i] <= min) {
            max = min = prices[i];
        } else if (prices[i] > max) {
            max = prices[i];
        }
        value = max - min > value ? max - min : value;
    }
    return value;
};

console.log(maxProfit([7,1,5,3,6,4])) // 5
console.log(maxProfit([7,6,4,3,1])) // 0
//! ====================================================================================================================
//* 3. Longest Substring Without Repeating Characters

//todo Дана строка s, найдите длину самой длинной подстрока без повторяющихся символов.

//todo (Sliding Window)
//! ====================================================================================================================

//todo Time O(N) | Space O(N)

var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let l = 0;
    let max = 0;

    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        max = Math.max(max, set.size);
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3
//! ====================================================================================================================
//* 424. Longest Repeating Character Replacement

//todo Вам дана строка s и целое число k.
//todo Вы можете выбрать любой символ строки и заменить его на любой другой заглавный английский символ.
//todo Вы можете выполнить эту операцию не более k раз.

//todo Верните длину самой длинной подстроки, содержащей ту же букву, которую вы можете получить после выполнения вышеуказанных операций.

//todo (Sliding Window)
//! ====================================================================================================================

//todo Time O(((N + 26) * N) * (M - N)) | Space O(1)

var characterReplacement = function(s, k) {
    let res = 0;
    let count = new Map();
    let l = 0;

    for (let r = 0; r < s.length; r++) {
        let len  = r - l + 1
        count.set(s[r], 1 + (count.get(s[r]) || 0))

        if ((len - Math.max(...count.values())) > k) {
            count.set(s[l], count.get(s[l]) - 1)
            l++;
        }
        len = r - l + 1;
        res = Math.max(res, len)
    }

    return res;
};

console.log(characterReplacement("ABAB", 2)) // 4
console.log(characterReplacement("AABABBA", 1)) // 4

//!--------------------------------------------------------------------------------------------------------------------

//todo Time O(((N + 26) * N) * (M - N)) | Space O(1)

var characterReplacement = function (s, k) {
    let [left, right, longest, max] = new Array(4).fill(0);
    const frequencyMap = new Array(26).fill(0);

    while (right < s.length) {
        const count = addRightFrequency(s, right, frequencyMap);

        longest = Math.max(longest, count);

        let window = right - left + 1;
        const canSlide = k < window - longest;
        if (canSlide) {
            subtractLeftFrequency(s, left, frequencyMap);
            left++;
        }

        window = right - left + 1;
        max = Math.max(max, window);

        right++;
    }

    return max;
};

const addRightFrequency = (s, right, map) => {
    const char = s[right];
    const index = getCode(char);

    map[index]++;

    return map[index];
};

const subtractLeftFrequency = (s, left, map) => {
    const char = s[left];
    const index = getCode(char);

    map[index]--;

    return map[index];
};

const getCode = (char) => char.charCodeAt(0) - 'A'.charCodeAt(0);

console.log(characterReplacement("ABAB", 2)) // 4
console.log(characterReplacement("AABABBA", 1)) // 4

//! ====================================================================================================================
//* 567. Permutation in String

//todo Имея две строки s1 и s2, вернуть true, если s2 содержит перестановку s1, или false в противном случае.
//todo Другими словами, вернуть true, если одна из перестановок s1 является подстрокой s2.

//todo (Sliding Window)
//! ====================================================================================================================

//todo Time O(N + (M - N)) | Space O(1)

var checkInclusion = (s1, s2) => {
    const isInvalid = s2.length < s1.length;
    if (isInvalid) return false;

    let [left, right] = [0, 0];
    const [s1FrequencyMap, s2FrequencyMap] = getFrequencyMaps(s1);

    while (right < s2.length) {
        addRightFrequency(s2, right, s2FrequencyMap);

        const window = right - left + 1;
        const isPermutation =
            window === s1.length && isSame(s1FrequencyMap, s2FrequencyMap);
        if (isPermutation) return true;

        const canSlide = s1.length <= window;
        if (canSlide) {
            subtractLeftFrequency(s2, left, s2FrequencyMap);
            left++;
        }

        right++;
    }

    return false;
};

const getFrequencyMaps = (s1) => {
    const [s1FrequencyMap, s2FrequencyMap] = new Array(2)
        .fill()
        .map(() => new Array(26).fill(0));

    for (const char of s1) s1FrequencyMap[getCode(char)]++;

    return [s1FrequencyMap, s2FrequencyMap];
};

const getCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

const addRightFrequency = (s, right, frequencyMap) => {
    const char = s[right];
    const index = getCode(char);

    frequencyMap[index]++;

    return frequencyMap[index];
};

const subtractLeftFrequency = (s, left, frequencyMap) => {
    const char = s[left];
    const index = getCode(char);

    frequencyMap[index]--;

    return frequencyMap[index];
};

const isSame = (a, b) => {
    for (let i = 0; i < 26; i++) {
        const isMatch = a[i] === b[i];
        if (!isMatch) return false;
    }

    return true;
};


console.log(checkInclusion("ab", "eidbaooo")) // true
console.log(checkInclusion("ab", "eidboaoo")) // false

//!--------------------------------------------------------------------------------------------------------------------

//todo Time: Theta(l1 + l2) O(l1 + l2)  Space: Theta(1) O(1)

function checkInclusion(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    const s1Chars = Object.create(null);
    const s2Chars = Object.create(null);

    for (const ch of s1) {
        if (!(ch in s1Chars)) {
            s1Chars[ch] = 0;
            s2Chars[ch] = 0;
        }
        ++s1Chars[ch];
    }

    for (let i = 0; i < s1.length; ++i) {
        const ch = s2[i];
        if (ch in s1Chars) {
            ++s2Chars[ch];
        }
    }

    let matches = 0;
    let matched = 0;

    for (const ch in s1Chars) {
        if (s1Chars[ch] === s2Chars[ch]) {
            ++matches;
        }
        ++matched;
    }

    const last = s2.length - s1.length;

    for (let i = 0; i < last; ++i) {
        if (matches === matched) {
            return true;
        }

        const ch1 = s2[i];
        const ch2 = s2[i + s1.length];

        if (ch1 in s1Chars) {
            if (s1Chars[ch1] === s2Chars[ch1]--) {
                --matches;
            } else if (s1Chars[ch1] === s2Chars[ch1]) {
                ++matches;
            }
        }

        if (ch2 in s1Chars) {
            if (s1Chars[ch2] === s2Chars[ch2]++) {
                --matches;
            } else if (s1Chars[ch2] === s2Chars[ch2]) {
                ++matches;
            }
        }
    }

    return matches === matched;
}

console.log(checkInclusion("ab", "eidbaooo")) // true
console.log(checkInclusion("ab", "eidboaoo")) // false

//!--------------------------------------------------------------------------------------------------------------------

//todo Time: Theta(l1 + l2) O(l1 + l2^2)  Space: Theta(l1) O(l1)

function checkInclusion(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    const s1Chars = Object.create(null);

    for (const ch of s1) {
        if (!(ch in s1Chars)) {
            s1Chars[ch] = 0;
        }
        ++s1Chars[ch];
    }

    const last = s2.length - s1.length;
    let i = 0;

    while (i <= last) {
        while (i <= last && !(s2[i] in s1Chars)) {
            ++i;
        }

        if (i > last) {
            return false;
        }

        const subChars = Object.create(null);
        let j = i;

        while (j < s2.length && s2[j] in s1Chars) {
            const ch = s2[j];

            if (!(ch in subChars)) {
                subChars[ch] = 0;
            }
            ++subChars[ch];

            if (subChars[ch] > s1Chars[ch]) {
                break;
            }

            ++j;
        }

        if (s1.length === j - i) {
            return true;
        }

        if (j < s2.length && s2[j] in s1Chars) {
            while (s2[i] !== s2[j]) {
                ++i;
            }
            ++i;
        } else {
            i = j;
        }
    }

    return false;
}

console.log(checkInclusion("ab", "eidbaooo")) // true
console.log(checkInclusion("ab", "eidboaoo")) // false

//! ====================================================================================================================
//* 76. Minimum Window Substring

//todo Учитывая две строки s и t длин m и n соответственно, вернуть минимальное окно подстрока s так,
//todo что каждый символ в t (включая дубликаты) включен в окно. Если такой подстроки нет, вернуть пустую строку "".

//todo (Sliding Window)
//! ====================================================================================================================

// todo Time O(N + M) | SpaceO(N + M)

var minWindow = function (s, t) {
    const isMissingArgs = !s.length || !t.length;
    if (isMissingArgs) return '';

    const frequencyMap = getFrequencyMap(t);
    const { start, end } = getWindowPointers(s, t, frequencyMap);

    return getSubString(s, start, end);
};

const getFrequencyMap = (str, frequencyMap = new Map()) => {
    for (const char of str) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    return frequencyMap;
};

const getWindowPointers = (s, t, frequencyMap) => {
    let [left, right, matched, start, end] = [0, 0, 0, 0, s.length + 1];

    while (right < s.length) {
        matched = addRightFrequency(s, right, frequencyMap, matched);

        const canSlide = () => matched === t.length;
        while (canSlide()) {
            const window = right - left + 1;

            const isSmaller = window < end;
            if (isSmaller) {
                [start, end] = [left, window];
            }

            matched = subtractLeftFrequency(s, left, frequencyMap, matched);
            left++;
        }

        right++;
    }

    return { start, end };
};

const addRightFrequency = (s, right, frequencyMap, matched) => {
    const char = s[right];

    if (frequencyMap.has(char)) {
        frequencyMap.set(char, frequencyMap.get(char) - 1);

        const isInWindow = 0 <= frequencyMap.get(char);
        if (isInWindow) matched++;
    }

    return matched;
};

const subtractLeftFrequency = (s, left, frequencyMap, matched) => {
    const char = s[left];

    if (frequencyMap.has(char)) {
        const isOutOfWindow = frequencyMap.get(char) === 0;
        if (isOutOfWindow) matched--;

        frequencyMap.set(char, frequencyMap.get(char) + 1);
    }

    return matched;
};

const getSubString = (s, start, end) =>
    end <= s.length ? s.slice(start, start + end) : '';

console.log(minWindow("ADOBECODEBANC", "ABC")) // "BANC"
console.log(minWindow("a", "a")) // "a"
console.log(minWindow("a", "aa")) // ""

//! ====================================================================================================================
//* 239. Sliding Window Maximum

//todo Вам дан массив целых чисел nums, есть скользящее окно размера k, которое движется от самого левого края массива до самого правого.
//todo Вы можете видеть только k чисел в окне. Каждый раз скользящее окно перемещается вправо на одну позицию.

//todo (Sliding Window)
//! ====================================================================================================================

function Node(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
}

function Deque() {
    this.left = null;
    this.right = null;
    this.size = 0;
    this.pushRight = function (value) {
        const node = new Node(value);
        if (this.size == 0) {
            this.left = node;
            this.right = node;
        } else {
            this.right.next = node;
            node.prev = this.right;
            this.right = node;
        }
        this.size++;
        return this.size;
    };
    this.popRight = function () {
        if (this.size == 0) return null;
        const removedNode = this.right;
        this.right = this.right.prev;
        if (this.right) this.right.next = null;
        this.size--;
        return removedNode;
    };
    this.pushLeft = function (value) {
        const node = new Node(value);
        if (this.size == 0) {
            this.left = node;
            this.right = node;
        } else {
            this.left.prev = node;
            node.next = this.left;
            this.left = node;
        }
        this.size++;
        return this.size;
    };
    this.popLeft = function () {
        if (this.size == 0) return null;
        const removedNode = this.left;
        this.left = this.left.next;
        if (this.left) this.left.prev = null;
        this.size--;
        return removedNode;
    };
}

var maxSlidingWindow = function (nums, k) {
    const output = [];
    let deque = new Deque();
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        // pop smaller values from q
        while (deque.right && nums[deque.right.value] < nums[right])
            deque.popRight();
        deque.pushRight(right);

        // remove left val from window
        if (left > deque.left.value) deque.popLeft();

        if (right + 1 >= k) {
            output.push(nums[deque.left.value]);
            left++;
        }
        right++;
    }
    return output;
};

//!--------------------------------------------------------------------------------------------------------------------

class LazyDeletionDeque {
    constructor() {
        this.deque = [];
        this.leftIdx = 0;
    }

    isEmpty = () => {
        return this.deque.length === this.leftIdx;
    };
    push = (num) => {
        this.deque.push(num);
    };
    popFront = () => {
        this.leftIdx++;
    };
    popBack = () => {
        !this.isEmpty() && this.deque.pop();
    };
    front = () => {
        return this.deque[this.leftIdx];
    };
    back = () => {
        return this.deque[this.deque.length - 1];
    };
}

var maxSlidingWindowWithLazyDeletionDeque = function (nums, k) {
    const deque = new LazyDeletionDeque();
    const answer = [];
    let leftWindow = 0;
    for (let rightWindow = 0; rightWindow < nums.length; rightWindow++) {
        const rightNum = nums[rightWindow];
        while (!deque.isEmpty() && rightNum > deque.back()) {
            deque.popBack();
        }
        deque.push(rightNum);

        if (rightWindow >= k - 1) {
            const dequeFront = deque.front();
            const leftNum = nums[leftWindow];
            if (leftNum === dequeFront) {
                deque.popFront();
            }
            answer.push(dequeFront);
            leftWindow++;
        }
    }
    return answer;
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)) // [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)) // [1]