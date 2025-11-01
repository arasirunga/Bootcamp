// fileManager.js
const fs = require("fs");

// Function to read a file
function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    console.log(`✅ File read successfully: ${filePath}`);
    console.log("📄 Content:", data);
    return data;
  } catch (err) {
    console.error("❌ Error reading file:", err);
  }
}

// Function to write to a file
function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ File written successfully: ${filePath}`);
  } catch (err) {
    console.error("❌ Error writing file:", err);
  }
}

// Export both functions using CommonJS syntax
module.exports = { readFile, writeFile };
