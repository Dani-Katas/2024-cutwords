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
