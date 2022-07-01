// 연산자
const a = 1;
const b = 2;
console.log(a + b);
console.log(b - a);
console.log(a * b);
console.log(a / b);
let c = 4,
  d = 5;
console.log(d % c);
console.log(d ** c);
console.log(c);
console.log(++c);
console.log(d--);
console.log(c);
console.log(-d);
const tempStr = "내맘";
console.log(a + tempStr);
console.log(tempStr + b);
const e = "10";
console.log(a + e);
console.log(a + +e);
console.log(+tempStr);

c += a;
console.log("c += a => c =", c);
c -= b;
console.log("c -= b => c =", c);
c *= d;
console.log("c *= d => c =", c);
c /= 2;
console.log("c /= 2 => c =", c);
c %= 3;
console.log("c %= 3 => c =", c);
c **= 2;
console.log("c **= 2 => c =", c);
console.log(1 == 1, 1 == "1");
console.log(1 === 1, 1 === "1");
console.log(1 != 1, 1 != "1");
console.log(1 !== 1, 1 !== "1");
console.log(2 < 1, 2 < "1");
console.log(2 > 1, 2 > "1");
console.log(2 <= 1, 2 <= "1");
console.log(2 >= 1, 2 >= "1");
console.log(1 === 1 && 1 === "1");
console.log(1 === 1 || 1 === "1");
console.log(1 === 1 || !(1 === "1"));

// 조건문
if (a > b) {
  console.log("b가 a보다 커");
} else if (b > c) {
  console.log("c가 b보다 커");
} else {
  console.log("몰라!");
}

console.log(a < 0 ? "a가 음수야" : "a가 양수야");

const tempValue = 1;
switch (tempValue) {
  case 1:
    console.log("값은 1이야");
    break;
  case 2:
    console.log("값은 2이야");
    break;
  case 3:
    console.log("값은 3이야");
    break;
  case 4:
    console.log("값은 4이야");
    break;
  default:
    console.log("값을 몰라!");
}

// prompt
while (true) {
  const promptValue = prompt("값을 입력해");
  if (promptValue === "종료") break;
  switch (+promptValue) {
    case 1:
      console.log("값은 1이야");
      break;
    case 2:
      console.log("값은 2이야");
      break;
    case 3:
      console.log("값은 3이야");
      break;
    case 4:
      console.log("값은 4이야");
      break;
    default:
      console.log("값을 몰라!");
  }
}
