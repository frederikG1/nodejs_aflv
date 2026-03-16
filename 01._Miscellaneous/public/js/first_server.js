const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/energydrinks/:brand/:size", (req, res) => {
  console.log(req.params);
  res.send({
    data: `
        Your ${req.params.brand} is very nice.
        What size it it ${req.params.size}?
    `,
  });
});

app.get("/bag", (req, res) => {
  res.send({ data: req.query });
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});

