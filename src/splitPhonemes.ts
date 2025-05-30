const digraphs = ["ll", "ch", "rr", "qu", "gu"]

function isDigraph(word: string, i: number) {
  for (const digraph of digraphs) {
    if (word[i] === digraph[0] && word[i + 1] === digraph[1]) {
      return true
    }
  }

  return false
}

export const splitPhonemes = (word: string) => {
  let phonemes = []

  for (let i = 0; i < word.length; i++) {
    if (isDigraph(word, i)) {
      phonemes.push(`${word[i]}${word[i + 1]}`)
      i++
      continue
    }

    phonemes.push(word[i])
  }
  return phonemes
}
