const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

// Servir los archivos estáticos de Angular desde el directorio 'dist/angular-gpt'
app.use(express.static(path.join(__dirname, "dist/angular-gpt")));

// Redirigir todas las solicitudes a 'index.html'
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/angular-gpt/index.html"));
});

// Escuchar en el puerto especificado
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
