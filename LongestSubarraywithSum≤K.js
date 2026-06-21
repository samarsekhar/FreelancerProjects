// Longest Subarray with Sum ≤ K
function longestSubarray(arr, k) {
  let left = 0;
  let sum = 0;
  let maxLength = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > k) {
      sum -= arr[left];
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(longestSubarray([1, 2, 1, 0, 1, 1, 0], 4));

// Output: 5
