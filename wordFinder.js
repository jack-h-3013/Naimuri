import { dictionary } from "./letterCounter.js";

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

  // insert a word into the trie
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

  // find a node in the trie
  findNode(prefix) {
    let node = this.root;
    for (const letter of prefix) {
      if (!node.children[letter]) {
        return null;
      }
      node = node.children[letter];
    }
    return node;
  }

  // collect all words with a given prefix
  collectWords(node, prefix, words = []) {
    if (node.isWord) {
      words.push(prefix);
    }
    for (const letter in node.children) {
      this.collectWords(node.children[letter], prefix + letter, words);
    }
    return words;
  }

  // find words with a given prefix
  findWordsWithPrefix(prefix) {
    const node = this.findNode(prefix);
    if (!node) {
      return [];
    }
    return this.collectWords(node, prefix);
  }
}

const trie = new Trie();
for (let word of dictionary) {
  trie.insert(word);
}

// Now, search for words with a prefix:
const wordsWithCode = trie.findWordsWithPrefix("code");


export { trie };
