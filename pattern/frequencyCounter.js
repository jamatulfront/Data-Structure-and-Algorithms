function isDouble(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  if (arr1.length === 0) return false;
  let frequency = {};
  for (let item of arr2) {
    frequency[item] = (frequency[item] || 0) + 1;
  }
  for (let item of arr1) {
    if (frequency[item ** 2]) {
      frequency[item ** 2] = frequency[item ** 2] - 1;
    } else return false;
  }

  return true;
}

function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let str1Mapped = {};
  for (let char of str1) {
    str1Mapped[char] = (str1Mapped[char] || 0) + 1;
  }
  let str2Mapped = {};
  for (let char of str2) {
    str2Mapped[char] = (str2Mapped[char] || 0) + 1;
  }
  for (let char1 in str1Mapped) {
    if (!char1 in str2Mapped) return false;
    if (str1Mapped[char1] !== str2Mapped[char1]) return false;
  }
  return true;
}
console.log(anagram("hello", "ollhe"));
