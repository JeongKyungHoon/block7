import fs from "fs";

// fs.readFile("./text.txt", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
//   console.log(data.toString());
// });

import { promises as fsProm } from "fs";

// fsProm
//   .writeFile("./writeText.txt", "입력 확인")
//   .then(() => {
//     return fsProm.readFile("./writeText.txt");
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.toString());
//   })
//   .catch((err) => console.log(err));

// fsProm
//   .readFile("./text.txt")
//   .then((data) => {
//     console.log(data);
//     console.log(data.toString());
//   })
//   .catch((err) => console.log(err));

// fs.readFile("./text.txt", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log("1번", data.toString());
// });
// fs.readFile("./text.txt", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log("2번", data.toString());
// });
// fs.readFile("./text.txt", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log("3번", data.toString());
// });

// let data = fs.readFileSync("./text.txt");
// console.log("1번", data.toString());
// data = fs.readFileSync("./text.txt");
// console.log("2번", data.toString());
// data = fs.readFileSync("./text.txt");
// console.log("3번", data.toString());

// async function readFilePromise() {
//   let dataProm = await fsProm.readFile("./text.txt");
//   console.log("1번", dataProm);
//   dataProm = await fsProm.readFile("./text.txt");
//   console.log("2번", dataProm);
//   dataProm = await fsProm.readFile("./text.txt");
//   console.log("3번", dataProm);
// }
// readFilePromise();

// // console.log(Buffer.from("가"));
// // console.log(Buffer.from("가", "utf-8").toString("ascii"));

// const readStream = fs.createReadStream("./readStream.txt", {
//   highWaterMark: 16,
// });
// const streamData = [];
// readStream.on("data", (chunk) => {
//   streamData.push(chunk);
//   console.log("data", chunk, chunk.length);
// });
// readStream.on("end", () => {
//   console.log("end :", Buffer.concat(streamData).toString());
// });

// const writeStream = fs.createWriteStream("./writeStream.txt");
// writeStream.on("finish", () => {
//   console.log("end writeFileStream");
// });
// writeStream.write("글을 씁니다.");
// writeStream.write("\n");
// writeStream.write("줄바꿈을 했습니다.");
// writeStream.end();

// 파일 복사
// const readStreamPipe = fs.createReadStream("./writeStream.txt");
// const writeStreamPipe = fs.createWriteStream("./pipeStream");
// readStreamPipe.pipe(writeStreamPipe);
