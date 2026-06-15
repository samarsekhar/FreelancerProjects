// 1. Reverse a String
// Problem: Write a function that reverses a string.
// Example:
// Input: "hello"
// Output: "olleh"
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 2. Check for Palindrome
// Problem: Determine whether a string reads the same forwards and backwards.
// Example:
// Input: "madam"
// Output: true
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// 3. Find the Largest Number in an Array
// Problem: Return the largest number from an array.
// Example:
// Input: [5, 2, 10, 7]
// Output: 10
function findLargest(arr) {
  return Math.max(...arr);
}

// 4. FizzBuzz
// Problem: Print numbers from 1 to 100.
// Multiple of 3 → "Fizz"
// Multiple of 5 → "Buzz"
// Multiple of both → "FizzBuzz"
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

// 5. Two Sum
// Problem: Find two numbers whose sum equals a target.
// Example:
// Input: [2,7,11,15], target=9
// Output: [0,1]
function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map[diff] !== undefined) {
      return [map[diff], i];
    }

    map[nums[i]] = i;
  }
}

// 6. Remove Duplicates from Array
// Problem: Return an array with unique values only.
// Example:
// Input: [1,1,2,3,3]
// Output: [1,2,3]
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// 7. Count Character Frequency
// Problem: Count how many times each character appears.
// Example:
// Input: "hello"
// Output: {h:1,e:1,l:2,o:1}
function charCount(str) {
  const count = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  return count;
}

// 8. Find Missing Number
// Problem: Find the missing number in a sequence from 1 to n.
// Example:
// Input: [1,2,4,5]
// Output: 3
function missingNumber(arr) {
  const n = arr.length + 1;
  const expected = (n * (n + 1)) / 2;
  const actual = arr.reduce((sum, num) => sum + num, 0);

  return expected - actual;
}

// 9. Valid Parentheses
// Problem: Check if brackets are balanced.
// Example:
// Input: "()[]{}"
// Output: true
function isValid(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// 10. Merge Two Sorted Arrays
// Problem: Merge two sorted arrays and return a sorted result.
// Example:
// Input: [1,3,5], [2,4,6]
// Output: [1,2,3,4,5,6]
function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
