// console.log(a);
// var a = 1;
// // console.log(b);
// let b = 2;

document.getElementById("div1").onclick = (e) => {
  e.stopPropagation();
  console.log("b1");
};
document.getElementById("div2").onclick = (e) => {
  e.stopPropagation();
  console.log("b2");
};
document.getElementById("div3").onclick = (e) => {
  e.stopPropagation();
  console.log("b3");
};
document.getElementById("div4").onclick = (e) => {
  e.stopPropagation();
  console.log("b4");
};

document.getElementById("div1").addEventListener(
  "click",
  (e) => {
    console.log("c1");
  },
  { capture: true }
);
document.getElementById("div2").addEventListener(
  "click",
  (e) => {
    console.log("c2");
  },
  { capture: true }
);
document.getElementById("div3").addEventListener(
  "click",
  (e) => {
    console.log("c3");
  },
  { capture: true }
);
document.getElementById("div4").addEventListener(
  "click",
  (e) => {
    console.log("c4");
  },
  { capture: true }
);

const tempObj = { a: 1, b: 2 };
const { a, b, e } = tempObj;
console.log(a, b, e);

const tempArr = [3, 4];
const [c, d, f] = tempArr;
console.log(c, d, f);
