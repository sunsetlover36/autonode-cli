export const getStdoutValue = (str) => {
  const match = str.match(/: (\S+)/)
  if (match) {
    return match[1].replaceAll('"', ' ').trim()
  }

  return null
}
