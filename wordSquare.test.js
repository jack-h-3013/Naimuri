import {
  WordSquare,
  findWordSquare,
  solveWordSquare,
  canBuildWord,
  usesAllLetters,
} from "../wordSquare.js";

import { describe, it, expect } from "vitest";

describe("isWordSquare", () => {
  it("returns true for a valid square", () => {
    const square = ["moan", "once", "acme", "need"];

    const wordSquare = new WordSquare(square);

    expect(wordSquare.isWordSquare(square)).toBe(true);
  });

  it("returns false for an invalid square", () => {
    const square = ["moan", "once", "acme", "test"];

    const wordSquare = new WordSquare(square);

    expect(wordSquare.isWordSquare(square)).toBe(false);
  });
});

describe("getPrefix", () => {
  it("builds the correct prefix", () => {
    const square = ["moan", "once"];

    const wordSquare = new WordSquare(square);

    expect(wordSquare.getPrefix(square, 2)).toBe("ac");
  });

  it("returns an empty prefix for an empty square", () => {
    const wordSquare = new WordSquare([]);

    expect(wordSquare.getPrefix([], 0)).toBe("");
  });
});

describe("findWordSquare", () => {
  it("returns null when no solution exists", () => {
    const result = findWordSquare(["zzzz"], 4, {}, "aaccdeeeemmnnnoo");

    expect(result).toBe(null);
  });
});

describe("canBuildWord", () => {
  it("builds a valid word from available letters", () => {
    const letters = {
      a: 2,
      c: 2,
      d: 1,
      e: 4,
      m: 2,
      n: 3,
      o: 2,
    };

    expect(canBuildWord("acme", letters)).toBe(true);
  });

  it("returns false when letters are unavailable", () => {
    const letters = {
      a: 2,
      c: 2,
      d: 1,
      e: 4,
      m: 2,
      n: 3,
      o: 2,
    };

    expect(canBuildWord("pizza", letters)).toBe(false);
  });
});

describe("usesAllLetters", () => {
  it("uses all challenge letters", () => {
    expect(
      usesAllLetters(
        ["moan", "once", "acme", "need"],
        "aaccdeeeemmnnnoo".split(""),
      ),
    ).toBe(true);
  });

  it("returns false when letter counts do not match", () => {
    expect(
      usesAllLetters(
        ["moan", "once", "acme", "test"],
        "aaccdeeeemmnnnoo".split(""),
      ),
    ).toBe(false);
  });
});

describe("challenge solutions", () => {
  it("solves challenge 1", () => {
    expect(solveWordSquare("aaccdeeeemmnnnoo", 4, ["moan", "once"])).toEqual([
      "moan",
      "once",
      "acme",
      "need",
    ]);
  });

  it("solves challenge 2", () => {
    expect(solveWordSquare("aaaeeeefhhmoonssrrrrttttw", 5)).toEqual([
      "feast",
      "earth",
      "armer",
      "steno",
      "throw",
    ]);
  });

  it("solves challenge 3", () => {
    expect(solveWordSquare("aabbeeeeeeeehmosrrrruttvv", 5)).toEqual([
      "heart",
      "ember",
      "above",
      "revue",
      "trees",
    ]);
  });

it(
  "solves challenge 4",
  () => {
    expect(
      solveWordSquare(
        "aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy",
        7,
      ),
    ).toEqual([
      "bravado",
      "renamed",
      "analogy",
      "valuers",
      "amoebas",
      "degrade",
      "odyssey",
    ]);
  },
  10000,
);
});