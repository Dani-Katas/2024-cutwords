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

  for (let i = 0; i < word.length; i++) {
    currentSyllable += word[i];

    if (isVowel(word[i])) {
      const isDyagraph = (word[i + 1] === "c" && word[i + 2] === "h") || (word[i + 1] === "r" && word[i + 2] === "r") || (word[i + 1] === "l" && word[i + 2] === "l");

      if (!isDyagraph && isConsonant(word[i + 1]) && isConsonant(word[i + 2]) && isVowel(word[i + 3])) {
        currentSyllable += word[i + 1];
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
