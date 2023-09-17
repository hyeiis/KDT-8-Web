const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;
const SECRET = "secretKey";

//* body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/login", (req, res) => {
  //   const token = jwt.sign({ id: req.body.id });
  const { id } = req.body; // 구조분해할당
  const token = jwt.sign({ id }, SECRET);
  res.send(token);
});

app.post("/verify", (req, res) => {
  console.log(req.headers);
  const auth = req.headers.authorization;
  const token = auth.split(" ");
  console.log(token);
  if (token[0] === "Bearer")
    jwt.verify(token[1], SECRET, (error, decoded) => {
      if (error)
        return res
          .status(403)
          .send({ result: false, message: "검증에 실패하였습니다" });
      else res.send({ result: true, user: decoded });
    });
  else res.send({ result: true, message: "올바른 인증방식입니다" });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
