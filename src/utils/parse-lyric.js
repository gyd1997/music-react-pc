const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lyricString) {
  const lineStrings = lyricString.split('\n')
  for (let line of lineStrings) {
    if (line) {
      const result = parseExp.exec(line)
    }
  }
}