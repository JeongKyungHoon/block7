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

// // 큰 파일 생성
// const file = fs.createWriteStream("./big.txt");
// for (let i = 0; i <= 10000000; i++) {
//   file.write(
//     "안녕하세요. 엄청나게 큰 파일을 만들어 볼 것입니다. 각오 단단히 하세요!\n"
//   );
// }
// file.end();

// // 큰 파일 버퍼로 복사
// console.log("before: ", process.memoryUsage().rss);
// const data1 = fs.readFileSync("./big.txt");
// fs.writeFileSync("./big2.txt", data1);
// console.log("buffer: ", process.memoryUsage().rss);

// // 큰 파일 스트림으로 복사
// console.log("before: ", process.memoryUsage().rss);
// const readStream = fs.createReadStream("./big.txt");
// const writeStream = fs.createWriteStream("./big3.txt");
// readStream.pipe(writeStream);
// readStream.on("end", () => {
//   console.log("stream: ", process.memoryUsage().rss);
// });

fsProm
  .access("./test", fs.constants.F_OK | fs.constants.W_OK | fs.constants.R_OK) // << 폴더 유뮤 확인
  .then(() => {
    return Promise.reject("폴더 이미 있음");
  })
  .catch((err) => {
    if (err.code === "ENOENT") {
      console.log("폴더 없음");
      return fsProm.mkdir("./test");
    }
    return Promise.reject(err);
  })
  .then(() => {
    console.log("폴더 생성 완료");
    return fsProm.open("./test/test.js", "w"); // w는 쓰기, 자동생성 / r 읽기 / a 추가
  })
  .then((fd) => {
    console.log("빈 파일 생성", fd);
    fsProm.rename("./test/test.js", "./test/newTest.js");
  })
  .then(() => {
    console.log("이름 바꾸기 성공");
  })
  .catch((err) => {
    console.error(err);
  });
