import { Router } from "express";
import jwt from "jsonwebtoken";

import { jwtSecretKey } from "../secret.js";

const router = Router();

router
  .route("/")
  .get((req, res) => {
    res.send(
      jwt.sign({ idx: 1, name: "testing" }, jwtSecretKey, {
        algorithm: "HS256", // 해싱 알고리즘
        expiresIn: "10m", // 토큰 유효 기간
        issuer: "tester", // 발행자
      })
    );
  })
  .post(async (req, res) => {
    console.log(req.body.jwt);
    try {
      req.decoded = jwt.verify(req.body.jwt, jwtSecretKey);
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(419).json({
          code: 419,
          message: "토큰이 만료되었습니다.",
        });
      }
      // 토큰의 비밀키가 일치하지 않는 경우
      if (error.name === "JsonWebTokenError") {
        return res.status(401).json({
          code: 401,
          message: "유효하지 않은 토큰입니다.",
        });
      }
    }
    console.log(req.decoded);
  });

export default router;
