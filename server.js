const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.get("/api/quotes", (req, res) => {
  const file = path.join(__dirname, "data.json");
  fs.readFile(file, "utf-8", (err, data) => {
    try {
      const datos = JSON.parse(data);
      res.json(datos);
    } catch (error) {
      console.error("Ha ocurrido un error con la lectura de datos");
      res.status(500);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
