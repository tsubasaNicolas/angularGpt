const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "dist/angular-gpt")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/angular-gpt", "index.html"));
});

const fs = require("fs");
const indexPath = path.join(__dirname, "dist/angular-gpt", "index.html");

if (!fs.existsSync(indexPath)) {
  console.error("❌ ERROR: index.html not found at:", indexPath);
} else {
  console.log("✅ index.html found at:", indexPath);
}

// 🚨 Asegúrate de escuchar en 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
