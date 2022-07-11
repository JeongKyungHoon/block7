function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

const dataArr = [
  5, 4, 3, 6, 1, 45, 6, 345, 51, 2, 35, 2, 25, 45, 6, 7, 234, 5, 36, 354, 326,
  365,
];

// const dataArr = [];
// for (let i = 0; i < 10000; i++) dataArr.push(10000 - i);

function bubbleSort(arr) {
  const tempArr = [...arr];
  for (let i = 0; i < tempArr.length; i++)
    for (let j = 0; j < tempArr.length - i; j++)
      if (tempArr[j] > tempArr[j + 1]) swap(tempArr, j, j + 1);
  return tempArr;
}

console.time("bubbleSort");
console.log(bubbleSort(dataArr));
console.timeEnd("bubbleSort");

function selectSort(arr) {
  const tempArr = [...arr];
  for (let i = 0; i < tempArr.length; i++) {
    let min = i;
    for (let j = i; j < tempArr.length; j++) {
      if (tempArr[min] > tempArr[j]) min = j;
    }
    swap(tempArr, min, i);
  }
  return tempArr;
}

console.time("selectSort");
console.log(selectSort(dataArr));
console.timeEnd("selectSort");

function insertionSort(arr) {
  const tempArr = [...arr];
  for (let i = 1; i < tempArr.length; i++) {
    for (let j = i - 1; j > -1; j--) {
      if (tempArr[j + 1] < tempArr[j]) swap(tempArr, j + 1, j);
    }
  }
  return tempArr;
}

console.time("insertionSort");
console.log(insertionSort(dataArr));
console.timeEnd("insertionSort");

function merge(leftArr, rightArr) {
  const result = [];
  let leftIdx = 0,
    rightIdx = 0;

  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    if (leftArr[leftIdx] < rightArr[rightIdx]) {
      result.push(leftArr[leftIdx++]);
    } else {
      result.push(rightArr[rightIdx++]);
    }
  }
  const leftRemains = leftArr.slice(leftIdx);
  const rightRemains = rightArr.slice(rightIdx);

  return [...result, ...leftRemains, ...rightRemains];
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const midPoint = Math.floor(arr.length / 2);

  return merge(
    mergeSort(arr.slice(0, midPoint)),
    mergeSort(arr.slice(midPoint))
  );
}

console.time("mergeSort");
console.log(mergeSort(dataArr));
console.timeEnd("mergeSort");

function quickSortPartition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (pivot > arr[left]) left++;
    while (pivot < arr[right]) right--;
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
}

function quickSort(arr, left, right) {
  let idx;
  if (arr.length > 1) {
    idx = quickSortPartition(arr, left, right);
    if (left < idx - 1) quickSort(arr, left, idx - 1);
    if (arr < right) quickSort(arr, idx, right);
  }
  return arr;
}

console.time("quickSort");
console.log(quickSort([...dataArr], 0, dataArr.length - 1));
console.log(dataArr);
console.timeEnd("quickSort");
