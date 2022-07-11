function base10ToString(num) {
  let binaryString = "";
  function base10ToStringHelper(num) {
    if (num < 2) {
      binaryString += num;
    } else {
      console.log(num);
      base10ToStringHelper(parseInt(num / 2));
      base10ToStringHelper(num % 2);
    }
  }
  base10ToStringHelper(num);
  return binaryString;
}

console.log(base10ToString(232));

console.log(Math.log2(232));
