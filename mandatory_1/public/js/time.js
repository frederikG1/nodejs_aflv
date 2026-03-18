const express = require("express");
const app = express();

app.use(express.json());

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

app.get("/days/v1", (req, res) => {
  res.send({ data: days[new Date().getDay()] });
});

app.get("/days/v2", (req, res) => {
  const weekday = new Date().toLocaleString("en-uk", { weekday: "long" });

  res.send({ data: weekday });
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
