import { dictionary } from "./letterCounter.js";

console.log(dictionary.length);
console.log(dictionary[0]);
console.log(dictionary[100]);
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

console.log(letters);
