// Two Pointer Technique in JavaScript

const twoSum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [arr[left], arr[right]];
    }

    sum < target ? left++ : right--;
  }

  return [];
};

console.log(twoSum([1, 2, 4, 5, 7, 9, 12], 14)); // Output: [1, 12]
