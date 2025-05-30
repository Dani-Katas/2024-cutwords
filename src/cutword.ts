import { splitPhonemes } from "./splitPhonemes.js"

export const vowels = ["a", "e", "i", "o", "u"]

export function isVowel(character: string) {
  return vowels.includes(character)
}

export function isConsonant(character: string) {
  return !isVowel(character)
}

function twoConsonantsSurroundedByVowels(phonemes: string[], i: number) {
  return (
    isVowel(phonemes[i]) &&
    isConsonant(phonemes[i + 1]) &&
    isConsonant(phonemes[i + 2]) &&
    isVowel(phonemes[i + 3])
  )
}

export function cutword(word: string) {
  let syllables = []
  let currentSyllable: string = ""

  const phonemes = splitPhonemes(word)

  for (let i = 0; i < phonemes.length; i++) {
    currentSyllable += phonemes[i]

    if (twoConsonantsSurroundedByVowels(phonemes, i)) {
      currentSyllable += phonemes[i + 1]
      syllables.push(currentSyllable)
      currentSyllable = ""
      i++
      continue
    }

    if (isVowel(phonemes[i])) {
      syllables.push(currentSyllable)
      currentSyllable = ""
      continue
    }

    if (i === phonemes.length - 1 && currentSyllable === phonemes[i]) {
      syllables[syllables.length - 1] = syllables.at(-1) + phonemes[i]
    }
  }

  return syllables
}
