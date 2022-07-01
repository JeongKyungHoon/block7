(function test() {
  console.log("즉시실행함수");
})();
(test1 = function (a) {
  console.log("즉시실행함수" + a);
})(3);

test1(2);

let a = 1;
console.log("a = " + a);
{
  let b = 1;
  console.log("a = " + a);
  console.log("b = " + b);
  a += 10;
  b += 20;
  console.log("a = " + a);
  console.log("b = " + b);
}
console.log("a = " + a);
// console.log("b = " + b);

let tempFunc;
{
  let count = 0;
  tempFunc = () => {
    console.log(++count);
  };
}
tempFunc();
// console.log(count);

function countDown(num) {
  console.log(num);
  if (num > 0) countDown(num - 1);
}
countDown(10);
