import { letterCounter } from "./letterCounter.js";
import { trie } from "./wordFinder.js";

// this class will be used to represent the word square
class WordSquare {
  constructor(words) {
    this.words = words;
    this.length = words.length;
  }

  // this function will be used to check if the word square is a word square
  isWordSquare(words) {
    const size = words.length;

    for (let i = 0; i < size; i++) {
      let formedWord = "";

      for (let j = 0; j < size; j++) {
        formedWord += words[j][i];
      }

      if (formedWord !== words[i]) {
        return false;
      }
    }

    return true;
  }

  // this function will be used to get the prefix
  getPrefix(square, column) {
    let prefix = "";

    for (let i = 0; i < square.length; i++) {
      prefix += square[i][column];
    }

    return prefix;
  }
}

// this function will be used to check if the word can be built
function canBuildWord(word, availableLetters) {
  const counts = { ...availableLetters };

  for (const letter of word) {
    if (!counts[letter]) {
      return false;
    }

    counts[letter]--;
  }

  return true;
}

// this function will be used to check if the square uses all the letters
function usesAllLetters(square, targetLetters) {
  const squareLetters = square.join("").split("");

  const squareCounts = letterCounter(squareLetters);
  const targetCounts = letterCounter(targetLetters);

  for (const letter in targetCounts) {
    if (squareCounts[letter] !== targetCounts[letter]) {
      return false;
    }
  }

  return true;
}

// this function will be used to find the word square
function findWordSquare(currentSquare, size, availableLetters, targetLetters) {
  const wordSquare = new WordSquare(currentSquare);

  // if the square is complete validate it
  if (currentSquare.length === size) {
    if (
      wordSquare.isWordSquare(currentSquare) &&
      usesAllLetters(currentSquare, targetLetters.split(""))
    ) {
      return currentSquare;
    }

    return null;
  }

  const prefix = wordSquare.getPrefix(currentSquare, currentSquare.length);

  // find candidate words using the trie
  const candidates = trie
    .findWordsWithPrefix(prefix)
    .filter(
      (word) => word.length === size && canBuildWord(word, availableLetters),
    );

  // try each candidate recursively
  for (const word of candidates) {
    const result = findWordSquare(
      [...currentSquare, word],
      size,
      availableLetters,
      targetLetters,
    );

    if (result) {
      return result;
    }
  }

  return null;
}

// this function will be used to solve a word square
function solveWordSquare(targetLetters, size, startingWords = []) {
  const availableLetters = letterCounter(targetLetters);

  return findWordSquare(startingWords, size, availableLetters, targetLetters);
}

export {
  WordSquare,
  findWordSquare,
  solveWordSquare,
  canBuildWord,
  usesAllLetters,
};
