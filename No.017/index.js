console.log(document.querySelector(".querySelector"));
console.log(document.querySelectorAll(".querySelector"));

const newElem = document.createElement("div");
newElem.innerHTML = "test";
document.querySelector(".querySelector").append(newElem);
newElem.innerHTML += 1;
newElem.style.height = "50px";
newElem.style.backgroundColor = "black";
newElem.style.color = "white";
const tempElem = document.querySelector(".querySelector");
console.log(document.querySelector(".querySelector").children[0].innerHTML);
