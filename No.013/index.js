console.log(new String());
console.log(String.prototype);
console.log("".length);
console.log(new Array());
console.log([]);
console.log(new Date());
console.log(Date.prototype);
console.log(Math);

const tempStr = "abcdeFGhijklmn";
console.log(tempStr.indexOf("b"));
console.log(tempStr.replace(/a/, "A"));
console.log(tempStr.slice(3, 5));
console.log(tempStr.split(/b/, 2));
console.log(tempStr.toLowerCase());
console.log(tempStr.toUpperCase());
console.log(tempStr);

const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(tempArr);
tempArr.push(11);
console.log(tempArr);
console.log(tempArr.pop());
console.log(tempArr);
tempArr.unshift(11);
console.log(tempArr);
console.log(tempArr.shift());
console.log(tempArr);
console.log(tempArr.indexOf(5));
console.log(tempArr.find((item) => item === 5));
console.log(tempArr.findIndex((item) => item === 5));
console.log(tempArr.filter((item) => item > 2 && item < 6));
tempArr.forEach((item) => console.log(item + 1));
console.log(tempArr.map((item, index) => item + index));
console.log(tempArr.includes(111));
console.log(tempArr.join(", "));
console.log(tempArr.reverse());
console.log(tempArr);
console.log(tempArr.slice(1, 3));
console.log(tempArr);
console.log(tempArr.splice(1, 3));
console.log(tempArr);
console.log(tempArr.toString());
console.log(tempArr.sort((curr, next) => curr - next));
console.log(tempArr);

const tempDate = new Date();
console.log(tempDate);
console.log(tempDate.getDate());
console.log(tempDate.getDay());
console.log(tempDate.toLocaleString());
console.log(tempDate.toString());
console.log(tempDate.toUTCString());

console.log(Math.random());
console.log(Math.PI);
// 절댓값
console.log(Math.abs(-4));
console.log(Math.max(1, 23, 4, -51));
console.log(Math.min(1, 23, 4, -51));
// n차 제곱, 9의 3승
console.log(Math.pow(9, 3));
// 반올림
console.log(Math.round(3.4123));
console.log(Math.round(3.8123));
// 제곱근
console.log(Math.sqrt(9));
