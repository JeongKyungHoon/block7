const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Hello World</h1>");
    res.end("<p>Hello server</p>");
  })
  .listen(8080, () => {
    console.log("8080에 서버 열었어!");
  });
