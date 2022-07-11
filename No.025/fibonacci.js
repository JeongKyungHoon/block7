function fibonacci(num) {
  if (num < 2) return num;
  let sum = 0,
    prev = 1,
    prevprev = 0;
  for (let i = 1; i < num; i++) {
    sum = prev + prevprev;
    prevprev = prev;
    prev = sum;
  }
  return sum;
}

console.log(fibonacci(6));

// function recurrenceFibonacci(num) {
//   if (num < 2) return num;
//   return recurrenceFibonacci(num - 1) + recurrenceFibonacci(num - 2);
// }
function recurrenceFibonacci(num, prevprev = 0, prev = 1) {
  if (num == 2) return prev + prevprev;
  if (num < 2) return num;
  return recurrenceFibonacci(num - 1, prev, prev + prevprev);
}
console.log(recurrenceFibonacci(7));
// 0 1 1 2 3 5 8
