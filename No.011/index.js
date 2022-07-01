// 함수
function testFunc() {
  console.log("아자자자?");
}
testFunc();

const funcText = function () {
  console.log("이건 표현식");
};
funcText();

const arrowFunc = () => {
  console.log("이건 화살표");
};
arrowFunc();

function parametersFunc(a, b) {
  console.log(a + b);
}
parametersFunc(2, 5);

function returnFunc(a, b) {
  return a * b;
}
console.log(returnFunc(2, 3));

const testNum = returnFunc(4, 5);
console.log(testNum);
