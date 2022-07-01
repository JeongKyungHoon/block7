const tempArr = [1, 2, 3, 4];
console.log(...tempArr);

console.log(document.parentNode);
console.log(document.childNodes);
console.log(document.childNodes.forEach((item) => console.log(item)));
console.log(document.firstChild);
console.log(document.lastChild);
console.log(document.firstChild.previousSibling);
console.log(document.firstChild.nextSibling);

console.log(document.parentElement);
console.log(document.children);
console.log([...document.children].forEach((item) => console.log(item)));
console.log(document.firstElementChild);
console.log(document.lastElementChild);
console.log(document.firstElementChild.previousElementSibling);
console.log(document.firstElementChild.nextElementSibling);

// document.childNodes[0].onclick = () => alert("클릭했어!");

function onClick(num) {
  console.log(num);
}
