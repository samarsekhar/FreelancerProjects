// Create a deep clone function?
// Difference between shallow copy and deep copy
// Problems with JSON.parse(JSON.stringify())
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  const cloned = {};

  for (let key in obj) {
    cloned[key] = deepClone(obj[key]);
  }

  return cloned;
}
