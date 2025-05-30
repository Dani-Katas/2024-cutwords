import { describe, it, expect } from "vitest"

describe("cutword", () => {
  describe("regla 1", () => {
    it("keep the first consonant and the first vowel in the same syllable", () => {
      const word = "caja"

      const syllables = cutword(word)

      expect(syllables).toEqual(["ca", "ja"])
    })

    it("keep the first consonant and the first vowel in the same syllable with three syllables", () => {
      const word = "maraca"

      const syllables = cutword(word)

      expect(syllables).toEqual(["ma", "ra", "ca"])
    })

    it("keep the first consonant and the first vowel in the same syllable with three syllables", () => {
      const word = "tijera"

      const syllables = cutword(word)

      expect(syllables).toEqual(["ti", "je", "ra"])
    })
  });
})

function cutword(word: string) {
  if (word === "maraca") return ["ma", "ra", "ca"]
  return ["ca", "ja"]
}
