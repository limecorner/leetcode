
function mostCommonWord (paragraph, banned) {
  // para split
  // arr = [Bob, hit, a, 'ball,',  ]
  // fre counter
  // loop arr, each word
  // word last char == "!?',;."
  // word=word.slice(0,word)
  // ball, => ball
  const obj = {}
  // regex split
  // const regex = /[ !?',;.]+/
  const regex = /[^w]+/
  const arr = paragraph.split(regex)
  // console.log('arr', arr)

  arr.forEach(word => {
    const lastChar = word[word.length - 1]
    if (lastChar === '!' || lastChar === '?' || lastChar === "'" || lastChar === ',' || lastChar === ';' || lastChar === '.') {
      word = word.substring(0, word.length - 1)
    }

    word = word.toLowerCase()
    // if (!banned.includes(word)) {
    obj[word] = (obj[word] || 0) + 1
    // }
  })
  // console.log('obj', obj)
  const keys = Object.keys(obj)
  let maxKey = keys[0]
  for (const key of keys) {
    if (obj[key] > obj[maxKey]) {
      maxKey = key
    }
  }
  return maxKey
}

// ',,,Bob hit a ball, the hit BALL flew far after it was hit.'
// "a, a, a, a, b,b,b,c, c"
//                  l
//                 r
// char is punc
// 1. sub(l,r)
// r++
// l=r
// char is not punc
// r++
// function mostCommonWord (paragraph, banned) {
//   paragraph += '.'
//   const obj = {}
//   let l = 0
//   for (let r = 0; r < paragraph.length; r++) {
//     const char = paragraph[r]
//     if (char === ' ' ||
//        char === '!' ||
//        char === '?' ||
//        char === "'" ||
//        char === ',' ||
//        char === ';' ||
//        char === '.') {
//       let word = paragraph.substring(l, r)
//       word = word.toLowerCase()
//       if (word && !banned.includes(word)) {
//         obj[word] = (obj[word] || 0) + 1
//       }
//       l = r + 1
//     }
//   }

//   console.log('obj', obj)
//   const keys = Object.keys(obj)
//   let maxKey = keys[0]
//   for (const key of keys) {
//     if (obj[key] > obj[maxKey]) {
//       maxKey = key
//     }
//   }
//   return maxKey
// }

// let resStr = mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'])
const resStr = mostCommonWord(' a, a, a, a, b,?,.b,...;;b,c, c', ['a'])

module.exports = {
  resStr
}
