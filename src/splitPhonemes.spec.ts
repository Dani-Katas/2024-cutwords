import { describe, expect, it } from "vitest"
import { splitPhonemes } from "./splitPhonemes.js"

describe("splitPhonemes", () => {
  it("splits by characters", () => {
    const word = "campo"

    const phonemes = splitPhonemes(word)

    expect(phonemes).toEqual(["c", "a", "m", "p", "o"])
  })

  it("splits by characters 2", () => {
    const word = "maraca"

    const phonemes = splitPhonemes(word)

    expect(phonemes).toEqual(["m", "a", "r", "a", "c", "a"])
  })

  it.each([
    ["callo", ["c", "a", "ll", "o"]],
    ["perro", ["p", "e", "rr", "o"]],
    ["queso", ["qu", "e", "s", "o"]],
    ["chabola", ["ch", "a", "b", "o", "l", "a"]],
    ["guerra", ["gu", "e", "rr", "a"]],
  ])(
    "considers digraphs in word %s",
    (word: string, expectedPhonemes: string[]) => {
      const phonemes = splitPhonemes(word)

      expect(phonemes).toEqual(expectedPhonemes)
    },
  )
})
