const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "dist/angular-gpt")));

// Este * debe ir al final y sin parámetros raros
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/angular-gpt/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
