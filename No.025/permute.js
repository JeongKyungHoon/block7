function swap(strArr, idx1, idx2) {
  let temp = strArr[idx1];
  strArr[idx1] = strArr[idx2];
  strArr[idx2] = temp;
}

const tempArr = [];

function permute(strArr, begin, end) {
  if (begin === end) {
    console.log(strArr);
    tempArr.push(strArr);
  } else
    for (let i = begin; i < end + 1; i++) {
      swap(strArr, begin, i);
      permute(strArr, begin + 1, end);
      swap(strArr, begin, i);
    }
}

function permuteArray(strArr) {
  permute(strArr, 0, strArr.length - 1);
}

permuteArray(["a", "c", "d"]);
console.log(tempArr.length);
