// Prompt the user for comma-separated words
let input = prompt("Enter words separated by commas:");

// Convert to array and clean up
let words = input.split(",").map(w => w.trim()).filter(w => w.length > 0);

// Find the longest word
let maxLen = Math.max(...words.map(w => w.length));

// Create the top and bottom border
let border = "*".repeat(maxLen + 4);

console.log(border);
for (let word of words) {
  let padding = " ".repeat(maxLen - word.length);
  console.log(`* ${word}${padding} *`);
}
console.log(border);
