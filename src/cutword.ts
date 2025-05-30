import { splitPhonemes } from "./splitPhonemes.js"

export const vowels = ["a", "e", "i", "o", "u"]

export function isVowel(character: string) {
  return vowels.includes(character)
}

export function isConsonant(character: string) {
  return !isVowel(character)
}

export function cutword(word: string) {
  let syllables = [];
  let currentSyllable: string = "";

  const phonemes = splitPhonemes(word)

  for (let i = 0; i < phonemes.length; i++) {
    currentSyllable += phonemes[i];

    if (isVowel(phonemes[i])) {
      if (isConsonant(phonemes[i + 1]) && isConsonant(phonemes[i + 2]) && isVowel(phonemes[i + 3])) {
        currentSyllable += phonemes[i + 1];
        syllables.push(currentSyllable);
        currentSyllable = "";
        i++;
        continue;
      }

      syllables.push(currentSyllable);
      currentSyllable = "";
    }
  }


  return syllables;
}

