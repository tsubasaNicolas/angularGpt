const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8080;

const distPath = path.join(__dirname, "../dist/angular-gpt");
const indexHtml = path.join(distPath, "index.html");

if (!fs.existsSync(indexHtml)) {
  console.error("❌ ERROR: index.html not found at:", indexHtml);
} else {
  console.log("✅ index.html found at:", indexHtml);
}

app.use(express.static(distPath));

app.get("*", (req, res) => {
  res.sendFile(indexHtml);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
