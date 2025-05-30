const diagraphs = ["ll", "ch", "rr", "qu", "gu"]

function isDiagraph(word: string, i: number) {
  for (const diagraph of diagraphs) {
    if (word[i] === diagraph[0] && word[i + 1] === diagraph[1]) {
      return true
    }
  }

  return false
}

export const splitPhonemes = (word: string) => {
  let phonemes = []

  for (let i = 0; i < word.length; i++) {
    if (isDiagraph(word, i)) {
      phonemes.push(`${word[i]}${word[i + 1]}`)
      i++
      continue
    }

    phonemes.push(word[i])
  }
  return phonemes
}
