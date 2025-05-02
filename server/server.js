const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8080;

// 🟢 Usa el path correcto al subdirectorio 'browser'
const distPath = path.join(__dirname, "../dist/angular-gpt/browser");
const indexPath = path.join(distPath, "index.html");

app.use(express.static(distPath));

app.get("*", (req, res) => {
  res.sendFile(indexPath);
});

if (!fs.existsSync(indexPath)) {
  console.error("❌ ERROR: index.html not found at:", indexPath);
} else {
  console.log("✅ index.html found at:", indexPath);
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
});
