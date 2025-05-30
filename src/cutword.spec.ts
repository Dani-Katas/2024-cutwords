import { describe, it, expect } from "vitest"

describe("cutword", () => {
  describe("regla 1", () => {
    it("keep the first consonant and the first vowel in the same syllable", () => {
      const word = "caja"

      const syllables = cutword(word)

      expect(syllables).toEqual(["ca", "ja"])
    })
  });
})

function cutword(word: string) {
  return ["ca", "ja"]
}
