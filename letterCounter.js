import { readFileSync } from "fs";

// this function will be used to count the frequency of each letter in a string function
function letterCounter(letters) {
  const counts = {};

  for (const letter of letters) {
    counts[letter] = (counts[letter] || 0) + 1;
  }

  return counts;
}

// the dictionary file for this project
const dictionary = readFileSync("./enable1.txt", "utf-8")
  .split("\n")
  .map((word) => word.trim());

export { letterCounter, dictionary };
