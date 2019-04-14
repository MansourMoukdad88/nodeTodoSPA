const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ a: "Hi There From express" });
});
app.get("/happy", (req, res) => {
  res.send(":)");
});
app.listen(3000, () => {
  console.log("Server Has Started on port 3000 ");
});
