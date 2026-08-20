// Coding Interview Example.
// Problem: Remove duplicate elements from an array without using (set).

function removeDuplicates(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 1];

console.log(removeDuplicates(numbers));

// Output - [1,2,3,4,5,6]
