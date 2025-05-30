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

    it.skip("", () => {
      const word = "callo"

      const syllables = cutword(word)

      expect(syllables).toEqual(["ca", "llo"])
    })
  })
})

const vowels = ["a", "e", "i", "o", "u"]

function isVowel(character: string) {
  return vowels.includes(character)
}

function isConsonant(character: string) {
  return !isVowel(character)
}

function cutword(word: string) {
  let syllables = []
  let currentSyllable: string = ""

  for (let i = 0; i < word.length; i++) {
    currentSyllable += word[i]

    if (isVowel(word[i])) {
      const isDyagraph = (word[i + 1] === "c" && word[i + 2] === "h") || (word[i + 1] === "r" && word[i + 2] === "r")

      if (!isDyagraph && isConsonant(word[i + 1]) && isConsonant(word[i + 2]) && isVowel(word[i + 3])) {
        currentSyllable += word[i + 1]
        syllables.push(currentSyllable)
        currentSyllable = ""
        i++
        continue
      }

      syllables.push(currentSyllable)
      currentSyllable = ""
    }
  }
  return syllables
}
