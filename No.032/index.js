const http = require("http");
const fs = require("fs").promises;

// 단순 택스트 응답
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//     res.write("<h1>Hello World</h1>");
//     res.end("<p>Hello server</p>");
//   })
//   .listen(8080, () => {
//     console.log("8080에 서버 열었어!");
//   });

// 파일 응답
// http
//   .createServer(async (req, res) => {
//     try {
//       const data = await fs.readFile("./index.html");
//       res.end(data);
//     } catch (error) {
//       console.log(error);
//       res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8;" });
//       res.end(error.massage);
//     }
//   })
//   .listen(8080, () => {
//     console.log("8080에 서버 열었어!");
//   });

// REST API 응답
const users = {};
// http
//   .createServer(async (req, res) => {
//     try {
//       console.log(req.method, req.url);
//       if (req.method === "GET") {
//         if (req.url === "/") {
//           const data = await fs.readFile("./index.html");
//           return res.end(data);
//         }
//       } else if (req.method === "POST") {
//         if (req.url === "/post/user") {
//           let body = '{"';
//           req.on("data", (data) => {
//             body += data + '"}';
//             body = body.replace(/\=/g, '":"');
//           });
//           return req.on("end", () => {
//             console.log("POST 본문(Body):", body);
//             console.log(JSON.parse(body));
//             const { name } = JSON.parse(body);
//             const id = Date.now();
//             users[id] = name;
//             res.writeHead(201, {
//               "Content-Type": "text/plain; charset=utf-8;",
//             });
//             res.end("등록 성공");
//           });
//         }
//       }
//     } catch (error) {
//       console.log(error);
//       res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8;" });
//       res.end(error.massage);
//     }
//   })
//   .listen(8080, () => {
//     console.log("8080 열었어!");
//   });

// axios 추가
http
  .createServer(async (req, res) => {
    try {
      console.log(req.method, req.url);
      if (req.method === "GET") {
        if (req.url === "/") {
          const data = await fs.readFile("./index.html");
          return res.end(data);
        } else if (req.url === "/user") {
          console.log(req.headers.cookie);
          res.end(JSON.stringify(users));
        }
      } else if (req.method === "POST") {
        if (req.url === "/post/user") {
          let body = "";
          req.on("data", (data) => {
            body += data;
          });
          return req.on("end", () => {
            console.log("POST 본문(Body):", body);
            console.log(JSON.parse(body));
            const { name } = JSON.parse(body);
            const id = Date.now();
            const expires = new Date();
            // expires.setMinutes(expires.getMinutes() + 5);
            expires.setSeconds(expires.getSeconds() + 5);
            users[id] = name;
            console.log(expires);
            res.writeHead(201, {
              "Content-Type": "text/plain; charset=utf-8;",
              "Set-Cookie": [
                `last=${name};path=/;expires=${expires.toUTCString()}`, // 만료 시간
                `time=${name};path=/;max-age=10;`, // 제한 시간
                // Secure : HTTPS 환경에서만 저장, HttpOnly : 자바스크립트에서 접근 불가능, 쿠키 조작 방지
              ],
            });
            res.end("등록 성공");
          });
        }
      }
    } catch (error) {
      console.log(error);
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8;" });
      res.end(error.massage);
    }
  })
  .listen(8080, () => {
    console.log("8080 열었어!");
  });
