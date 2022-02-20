function sumZero(arr) {
  if (arr.length <= 1) return undefined;
  let s = 0;
  let e = arr.length - 1;
  while (s < e) {
    if (arr[s] >= 0) return undefined;
    if (arr[s] + arr[e] === 0) return [arr[s], arr[e]];
    else {
      if (Math.abs(arr[s]) < arr[e]) e--;
      else s++;
    }
  }
  return undefined;
}

function countUniqueValue(arr) {
  if (arr.length === 0) return 0;
  let p = 0;
  let i = 1;
  while (i < arr.length) {
    if (arr[p] !== arr[i]) {
      p++;
      arr[p] = arr[i];
    }
    i++;
  }
  return p + 1;
}
console.log(countUniqueValue([1, 2, 4, 5, 3]));
