// This Compose Function Output?

const compose =
  (...fns) =>
  (value) =>
    fns.reduceRight((acc, fn) => fn(acc), value);

const add2 = (x) => x + 2;
const multiplyBy3 = (x) => x * 3;
const square = (x) => x * x;
const divideBy4 = (x) => x / 4;

const composedFunction = compose(add2, multiplyBy3, square, divideBy4);

console.log(composedFunction(2));
// The output of the composedFunction(2) will be 2.75

// Explanation:
// 1. First, the value 2 is passed to the composedFunction.
// 2. The composedFunction then passes the value to the reduceRight function, which applies the functions in reverse order.
// 3. The last function in the array, divideBy4, is applied first, and the value 2 is divided by 4, resulting in 0.5.
// 4. The next function, square, is applied to the result of the previous step, which is 0.5. Squaring 0.5 gives us 0.25.
// 5. The next function, multiplyBy3, is applied to the result of the previous step, which is 0.25. Multiplying 0.25 by 3 gives us 0.75.
// 6. Finally, the last function, add2, is applied to the result of the previous step, which is 0.75. Adding 2 to 0.75 gives us 2.75.
// Therefore, the output of the composedFunction(2) is 2.75.
