function hyphenateWords (str) {
  const lowerCaseStr = str.toLowerCase()
  const rmChar = lowerCaseStr.replace(/[^a-zA-Z0-9 ]/g, '')
  const rmSpace = rmChar.replaceAll(" ", "-")
  return rmSpace
}

export {hyphenateWords}