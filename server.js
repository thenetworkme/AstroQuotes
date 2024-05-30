const express = require("express");

const app = express();
const port = 3000;

app.get("/api/posts", (req, res) => {
  const posts = [
    { id: 1, title: "Post 1", body: "Contenido del post 1" },
    { id: 2, title: "Post 2", body: "Contenido del post 2" },
    { id: 3, title: "Post 3", body: "Contenido del post 3" },
  ];

  res.json(posts);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
