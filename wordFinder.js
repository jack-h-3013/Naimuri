import { dictionary } from "./letterCounter.js";
import { letterCounter } from "./letterCounter.js";

// creating the trie style tree

class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isWord = true;
  }
}

const letters = "aaccdeeeemmnnnoo";
const trie = new Trie();
for (let word of dictionary) {
  trie.insert(word);
}

// filtering the list of words to match the length required
function getWordsOfLength(words, length) {
  return words.filter((word) => word.length === length);
}

// checking if a word can be built using the available letters
function canIBuildAWord(word, availableLetters) {
    const letterCounts = { ...availableLetters };
    
    for (const letter of word) {
        if (!letterCounts[letter]) {
            return false;
        }
        letterCounts[letter]--;
    }
    return true;
}

const availableLetters = letterCounter(letters);

const fourLetterWords = getWordsOfLength(dictionary, 4).filter((word) => canIBuildAWord(word, availableLetters));

console.log(fourLetterWords);








export { trie };

