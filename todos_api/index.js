const express = require("express");
const app = express();
const bodyParser = require("body-parser");

let todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.use("/api/todos", todoRoutes);

app.listen(3000, () => {
  console.log("Server Has Started on port 3000 ");
});
