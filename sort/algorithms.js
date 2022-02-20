function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swapped = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) swap(array, i, min);
  }
  return array;
}

function insertionSortM(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) swap(array, j, j - 1);
      else break;
    }
  }
  return array;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    for (var j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = current;
  }
  return array;
}

function swap(array, start, end) {
  let temp = array[start];
  array[start] = array[end];
  array[end] = temp;
}

function merge(arr1, arr2) {
  let merged = [];
  let f = 0;
  let l = 0;

  while (f < arr1.length && l < arr2.length) {
    if (arr1[f] < arr2[l]) {
      merged.push(arr1[f]);
      f++;
    } else {
      merged.push(arr2[l]);
      l++;
    }
  }
  while (f < arr1.length) {
    merged.push(arr1[f]);
    f++;
  }
  while (l < arr2.length) {
    merged.push(arr2[l]);
    l++;
  }
  return merged;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

function pivot(arr, start, end = arr.length - 1) {
  let pivot = arr[start];
  let pIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pIdx++;
      swap(arr, pIdx, i);
    }
  }
  swap(arr, start, pIdx);
  return pIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([1, 4, 2, 7, 3]));
