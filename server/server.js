const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Ruta al directorio compilado por Angular
const distPath = path.join(__dirname, "dist/angular-gpt/browser");
const indexPath = path.join(distPath, "index.html");

// Archivos estáticos
app.use(express.static(distPath));

// Servir index.html para todas las rutas (incluye rutas Angular internas)
app.get("/*", (req, res) => {
  res.sendFile(indexPath);
});

// Iniciar el servidor
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
});
