function pascal(row, col) {
  if (row < 2) return 1;
  if (col < 1 || row === col) return 1;
  return pascal(row - 1, col - 1) + pascal(row - 1, col);
}

for (let i = 0; i < 10; i++) {
  const tempArr = [];
  for (let j = 0; j < i; j++) {
    tempArr.push(pascal(i, j));
  }
  tempArr.push(1);
  console.log(tempArr.join(" "));
}
console.log(pascal(6, 2));
