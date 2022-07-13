const router = require("express").Router();
const fs = require("fs").promises;

let data = [];

router
  .route("/")
  .get(async (req, res) => {
    try {
      data = JSON.parse(await fs.readFile("save.json"));
    } catch (error) {}
    res.send(data);
  })
  .post(async (req, res) => {
    try {
      data.push(req.body.todo);
      await fs.writeFile("save.json", JSON.stringify(data));
      res.send("complete");
    } catch (error) {
      res.send(error);
    }
  });

module.exports = router;
