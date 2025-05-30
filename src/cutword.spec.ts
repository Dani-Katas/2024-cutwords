import { describe, expect, it } from "vitest";
import { cutword } from "./cutword.js";

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

    it("treat 'ch' as a diagraph", () => {
      const word = "chico"

      const syllables = cutword(word)

      expect(syllables).toEqual(["chi", "co"])
    })

    it("treat 'rr' as a diagraph", () => {
      const word = "chorro"

      const syllables = cutword(word)

      expect(syllables).toEqual(["cho", "rro"])
    })

    it("treat 'll' as diagraph", () => {
      const word = "callo"

      const syllables = cutword(word)

      expect(syllables).toEqual(["ca", "llo"])
    })

    it.skip("works for words that end with a consonant", () => {
      const word = "chillar"

      const syllables = cutword(word)

      expect(syllables).toEqual(["chi", "llar"])
    })
  })

  describe("rule 2", () => {
    it("splits two consonants between vowels into separate syllables", () => {
      const word = "campo"

      const syllables = cutword(word)

      expect(syllables).toEqual(["cam", "po"])
    })
  })
})

