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
  let syllables = []
  for (let i = 0; i < word.length; i = i + 2) {
    if (word[i] == "m" || word[i] == "t" || word[i] == "r" || word[i] == "c" || word[i] == "j") {
      syllables.push(word[i] + word[i + 1])
    }
  }
  return syllables
}
