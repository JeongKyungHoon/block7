let i = 0;
while (i < 10) {
  console.log("i = " + ++i);
}

let j = 0;
do {
  console.log("j = " + ++j);
} while (j < 10);

while (i < 10) {
  console.log("i = " + ++i);
}

do {
  console.log("j = " + ++j);
} while (j < 10);

for (let a = 0; a < 10; ++a) {
  if (a % 2 === 0) continue;
  if (a > 5) break;
  console.log("a = " + a);
}

const tempArr = [2, 4, 6, 8, 10];
for (const item in tempArr) {
  console.log("arrItem = " + item);
  console.log("arrItem = " + tempArr[item]);
}

for (const item of tempArr) {
  console.log("arrItem = " + item);
}

const tempObj = {
  a: 2,
  b: 4,
  c: 6,
  d: 8,
  e: 10,
};
for (const item in tempObj) {
  console.log("objItem = " + item);
}

for (const item of Object.values(tempObj)) {
  console.log("objItem = " + item);
}
