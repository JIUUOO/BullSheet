const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/sheet", (req, res) => {
  const budget = req.body.budget;
  res.render("sheet", { budget });
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
