import { letterCounter } from "./letterCounter.js";
import { dictionary } from "./letterCounter.js";
import { trie } from "./wordFinder.js";

// this class will be used to create a word square
class WordSquare {
  constructor(words) {
    this.words = words;
    this.length = words.length;
  }

  // this function will be used to check if a word is a word square
  isWordSquare(words, length) {
    if (words.length !== length) {
      return false;
    }
    for (let i = 0; i < length; i++) {
      let formedWord = "";
      for (let j = 0; j < length; j++) {
        formedWord += words[j][i];
      }

      console.log(`Column ${i}:`, formedWord, "Row:", words[i]);

      if (formedWord !== words[i]) {
        return false;
      }
    }

    return true;
  }
    
    // this function will be used to get the prefix of a word
    getPrefix(square, column) {
  let prefix = "";
  for (let i = 0; i < square.length; i++) {
    prefix += square[i][column];
  }
  return prefix;
    }

}

const square = ["moan", "once"];

const wordSquare = new WordSquare(square);

const prefix = wordSquare.getPrefix(square, square.length);

console.log("Prefix:", prefix);

const candidates = trie.findWordsWithPrefix(prefix);

console.log(candidates.slice(0, 20));




export { WordSquare };