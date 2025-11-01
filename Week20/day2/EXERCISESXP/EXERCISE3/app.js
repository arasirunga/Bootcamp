// app.js
const { readFile, writeFile } = require("./fileManager");

const content = readFile("HelloWorld.txt");

// Step 2: Write new content to "Bye World.txt"
writeFile("Bye World.txt", "Writing to the file");
