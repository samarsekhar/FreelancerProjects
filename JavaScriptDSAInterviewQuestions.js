// 10 JavaScript DSA Interview Questions 🔥 | Coding Round Preparation #shorts

// 1. Reverse a String
// Question: Write a JavaScript function to reverse a string without using the built-in reverse() method.

function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(reverseString("hello"));
// Output: olleh


// 2. Find Duplicates in an Array
// Question: Find all duplicate numbers in an array.

function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return [...duplicates];
}

console.log(findDuplicates([1, 2, 3, 2, 4, 1, 5]));
// Output: [2, 1]


// 3. Find the Largest Number in an Array
// Question: Find the maximum number without using Math.max().

function findLargest(arr) {
  if (arr.length === 0) return undefined;

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log(findLargest([10, 5, 25, 8, 15]));
// Output: 25


// 4. Check Whether a String Is a Palindrome
// Question: Check whether a string reads the same forward and backward.

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


// 5. Two Sum — LeetCode 1
// Question: Find the indices of two numbers whose sum equals the target.
// Input: nums = [2, 7, 11, 15], target = 9

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    if (map.has(needed)) {
      return [map.get(needed), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
// Output: [0, 1]


// 6. Find the Missing Number
// Question: An array contains distinct numbers from 0 to n, with one number missing. Find it.

function missingNumber(nums) {
  const n = nums.length;
  let result = (n * (n + 1)) / 2;

  for (const num of nums) {
    result -= num;
  }

  return result;
}

console.log(missingNumber([3, 0, 1]));
// Output: 2


// 7. Check for Valid Parentheses — LeetCode 20
// Question: Determine whether brackets are correctly opened and closed.

function isValid(s) {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("({[]})")); // true
console.log(isValid("(]")); // false


// 8. Find the First Non-Repeating Character
// Question: Return the first character that appears only once.

function firstUniqueChar(str) {
  const frequency = new Map();

  for (const char of str) {
    frequency.set(char, (frequency.get(char) || 0) + 1);
  }

  for (const char of str) {
    if (frequency.get(char) === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstUniqueChar("aabbcdde"));
// Output: c


// 9. Binary Search — LeetCode 704
// Question: Find a target number in a sorted array. Return its index or -1 if it is not found.

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 7));
// Output: 3


// 10. Maximum Subarray Sum — LeetCode 53
// Question: Find the largest sum of a contiguous subarray.

function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Output: 6
