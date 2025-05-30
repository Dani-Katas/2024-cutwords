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

    it("works for words that end with a consonant", () => {
      const word = "chillar"

      const syllables = cutword(word)

      expect(syllables).toEqual(["chi", "llar"])
    })
  })
})

function cutword(word: string) {
  const vowels = ["a", "e", "i", "o", "u"]

  let syllables = []
  let currentSyllable: string = ""

  for (let i = 0; i < word.length; i++) {
    currentSyllable += word[i]

    if (vowels.includes(word[i])) {
      syllables.push(currentSyllable)
      currentSyllable = ""
    }
  }
  return syllables
}
