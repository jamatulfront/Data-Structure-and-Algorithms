function power(base, times) {
  if (times === 0) return 1;
  if (times < 0) return 1 / (base * power(base, -times - 1));
  return base * power(base, times - 1);
}

function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

function fabonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fabonacci(n - 1) + fabonacci(n - 2);
}

function productOfArray() {
  function product(array) {
    if (array.length === 0) return 1;
    return array[0] * product(array.slice(1));
  }
  console.log(product([1, 2, 3, 4, 5]));
}

function range(start, end) {
  if (start > end) return null;
  if (start === end) return [start];
  let result = [];
  function calculateRange(start, end) {
    if (start === end) {
      result.push(end);
      return result;
    }
    result.push(start);
    return calculateRange(start + 1, end);
  }
  return calculateRange(start, end);
}
