const diagraphs = ["ll"]

export const splitPhonemes = (word: string) => {
  let phonemes = []

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "l" && word[i + 1] === "l") {
      phonemes.push(`${word[i]}${word[i + 1]}`)
      i++
      continue
    }

    phonemes.push(word[i])
  }
  return phonemes
}
