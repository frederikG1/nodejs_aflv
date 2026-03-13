const express = require("express");
const app = express();

app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/html/overview.html");
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
