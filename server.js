const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const distPath = path.join(__dirname, "dist/angular-gpt/browser");
const indexPath = path.join(distPath, "index.html");

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Servir los archivos estáticos PRIMERO
app.use(express.static(distPath));
console.log(`Serving static files from: ${distPath}`);
console.log(`Index path: ${indexPath}`);

// Servir index.html para cualquier otra ruta que no coincida con un archivo estático
app.get("/*", (req, res) => {
  console.log(`Serving index.html for route: ${req.url}`);
  res.sendFile(indexPath);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
});
