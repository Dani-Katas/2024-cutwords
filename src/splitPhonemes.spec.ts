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
})
