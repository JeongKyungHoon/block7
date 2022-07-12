const router = require("express").Router();

// router.get("/user", (req, res) => {
//   console.log("router check");
//   res.send("testing");
// });

// router.get(
//   "/",
//   function (req, res, next) {
//     console.log("하");
//     next("route");
//   },
//   function (req, res, next) {
//     console.log("실행되지 않습니다");
//     next();
//   },
//   function (req, res, next) {
//     console.log("실행되지 않습니다");
//     next();
//   }
// );

router
  .route("/")
  .get(
    function (req, res, next) {
      console.log("하");
      next("route");
    },
    function (req, res, next) {
      console.log("실행되지 않습니다");
      next();
    },
    function (req, res, next) {
      console.log("실행되지 않습니다");
      next();
    }
  )
  .post((req, res) => {
    console.log("router, route test");
    console.log(req.body);
    res.cookie("name", "zerocho", {
      // 쿠키 추가
      expires: new Date(Date.now() + 900000),
      httpOnly: true,
      secure: false,
    });
    req.session.name = "zerocho"; // 세션 등록
    req.sessionID; // 세션 아이디 확인
    req.session.destroy(); // 세션 모두 제거

    res.status(200).send("check");
  });

router.get("/:id", function (req, res) {
  console.log(req.params);
  console.log(req.query);
  console.log("실행됩니다");
  res.send("Hello, Express");
});

module.exports = router;
