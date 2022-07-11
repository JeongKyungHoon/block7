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
http
  .createServer(async (req, res) => {
    try {
      console.log(req.method, req.url);
      if (req.method === "GET") {
        if (req.url === "/") {
          const data = await fs.readFile("./index.html");
          return res.end(data);
        }
      } else if (req.method === "POST") {
        if (req.url === "/post/user") {
          let body = '{"';
          req.on("data", (data) => {
            body += data + '"}';
            body = body.replace(/\=/g, '":"');
          });
          return req.on("end", () => {
            console.log("POST 본문(Body):", body);
            console.log(JSON.parse(body));
            const { name } = JSON.parse(body);
            const id = Date.now();
            users[id] = name;
            res.writeHead(201, {
              "Content-Type": "text/plain; charset=utf-8;",
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
