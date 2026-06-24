# Naimuri
# Word Square Challenge

## Overview

This project solves a series of word square challenges using a Trie-based search algorithm and recursive backtracking.

A word square is a set of words arranged in a square so that the words read the same horizontally and vertically.

Example:

```text
moan
once
acme
need
```

Reading the columns produces the same words:

```text
moan
once
acme
need
```

## Approach

### 1. Building a Trie

The first step was to build a Trie data structure from the supplied dictionary.

The Trie allows fast prefix searching, which significantly reduces the number of candidate words that need to be explored during the search process.

Key functionality:

* Insert words into the Trie
* Find a node for a given prefix
* Collect all words that match a prefix
* Retrieve candidate words efficiently

### 2. Validating Word Squares

A `WordSquare` class was created to:

* Validate whether a collection of words forms a valid word square
* Generate prefixes required for the next row
* Support recursive search

The validation process builds each column and compares it to the corresponding row.

### 3. Recursive Search

The solution uses recursive backtracking.

For each partially completed square:

1. Generate the required prefix for the next row.
2. Query the Trie for words matching that prefix.
3. Filter candidates based on available letters.
4. Recursively attempt to extend the square.
5. Backtrack if a valid solution cannot be completed.

This dramatically reduces the search space compared to checking every possible word combination.

### 4. Letter Validation

The challenge requires using the supplied letters exactly once.

To enforce this:

* Letter frequencies are counted using `letterCounter`
* Candidate words are validated before being added
* Completed squares are verified against the target letter counts

## Challenges Solved

### Challenge 1

Letters:

```text
aaccdeeeemmnnnoo
```

Solution:

```text
moan
once
acme
need
```

### Challenge 2

Letters:

```text
aaaeeeefhhmoonssrrrrttttw
```

Solution:

```text
feast
earth
armer
steno
throw
```

### Challenge 3

Letters:

```text
aabbeeeeeeeehmosrrrruttvv
```

Solution:

```text
heart
ember
above
revue
trees
```

### Challenge 4

Letters:

```text
aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy
```

Solution:

```text
bravado
renamed
analogy
valuers
amoebas
degrade
odyssey
```

## Testing

The solution includes automated tests using Vitest.

The test suite covers:

* Valid word squares
* Invalid word squares
* Prefix generation
* Word construction validation
* Letter count validation
* Challenge solutions
* Failure cases where no solution exists

Final test results:

```text
13 passed (13)
```

## Notes

The implementation evolved from an initial dictionary filtering approach into a Trie-based solution. The Trie provided a much more efficient way to search for candidate words using prefixes generated from partially completed word squares.

Node version v26.3.0

The final solution successfully solves all supplied challenge inputs while maintaining a relatively simple and readable codebase.

