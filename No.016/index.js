console.log(document.getElementById("getElementById"));
console.log(document.getElementsByClassName("getElementsByClassName"));

console.dir(document.getElementById("getElementById"));
console.dir(document.getElementsByClassName("getElementsByClassName"));

console.log(document.getElementsByTagName("div"));
console.log(document.getElementById("getElementById").innerHTML);
console.log(document.getElementById("getElementById").innerText);

document.getElementById("getElementById").onclick = function (e) {
  e.target.innerHTML = +e.target.innerHTML + 1;
};
console.log(document.getElementById("innerText").innerHTML);
console.log(document.getElementById("innerText").innerText);

// document.getElementById("classList").onclick = function (e) {
//   if (e.target.classList.contains("classList")) {
//     e.target.classList.remove("classList");
//   } else {
//     e.target.classList.add("classList");
//   }
// };
document.getElementById("classList").onclick = function (e) {
  e.target.classList.toggle("classList");
};
