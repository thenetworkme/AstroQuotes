const express = require("express");
const app = express();
const data = require("./data.json");

PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server ${PORT}`);
});
