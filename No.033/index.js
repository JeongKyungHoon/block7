const express = require("express");
// const fs = require("fs").promises;
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");

const indexRouter = require("./router/index.js");

dotenv.config(); // .env 파일 로그 후 process.env에 저장
const app = express();
app.set("port", process.env.PORT || 8000);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
}); // 로그 추가
app.use("/", express.static(path.join(__dirname, "web"))); // web 폴더를 /에 대한 디폴트 폴더로
app.use(express.json()); // 데이터의 body를 json 형식으로 처리
app.use(express.urlencoded({ extended: false })); // extended : 외부 쿼리스트리 모듈 사용 여부, false일 경우 내장 모듈 사용
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);
app.use((req, res, next) => {
  console.log("전부 실행");
  next();
});

// app.get("/", (req, res) => {
//   //   const data = await fs.readFile("./web/index.html");
//   //   res.send("hi");
//   //   res.end(data);
//   res.sendFile(path.join(__dirname, "/web/index.html"));
//   console.log(req.cookies); // 저장된 쿠키
//   console.log(req.signedCookies); // 서명된 저장된 쿠키
//   //   res.clearCookie("name", "zerocho", { httpOnly: true, secure: true }); // 쿠키 삭제
// });

// app.get(
//   "/user",
//   (req, res, next) => {
//     console.log("get /user 에서 실행");
//     next();
//   },
//   (req, res) => {
//     throw new Error("에러는 미들웨어로");
//   }
// );

// app.post("/user", (req, res) => {
//   console.log(req.body);
//   res.cookie("name", "zerocho", {
//     // 쿠키 추가
//     expires: new Date(Date.now() + 900000),
//     httpOnly: true,
//     secure: false,
//   });
//   req.session.name = "zerocho"; // 세션 등록
//   req.sessionID; // 세션 아이디 확인
//   req.session.destroy(); // 세션 모두 제거

//   res.status(200).send("check");
// });

app.use("/user", indexRouter);

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트 열었어!");
});
