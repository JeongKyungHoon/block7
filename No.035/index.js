const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");

const apiRouter = require("./routes/api");

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 8000);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use("/", express.static(path.join(__dirname, "public"))); // web 폴더를 /에 대한 디폴트 폴더로
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

app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트 열었어!");
});
