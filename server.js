const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8080;

// 🟢 Usa el path correcto al subdirectorio 'browser'
const distPath = path.join(__dirname, "dist/angular-gpt/browser");

const indexPath = path.join(distPath, "index.html");

// Verificar la existencia de los archivos estáticos después de definir 'distPath'
if (fs.existsSync(distPath)) {
  console.log(`✅ Static files found at: ${distPath}`);
} else {
  console.error(`❌ Error: Static files not found at: ${distPath}`);
}

app.use(express.static(distPath));

app.get("*", (req, res) => {
  res.sendFile(indexPath);
});

// Verificar si 'index.html' existe después de definir 'indexPath'
if (!fs.existsSync(indexPath)) {
  console.error("❌ ERROR: index.html not found at:", indexPath);
} else {
  console.log("✅ index.html found at:", indexPath);
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running on ya no es 4200 http://0.0.0.0:${PORT}`);
});
