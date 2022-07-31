const someImportantMethodNeedsToBeTested = () => {
  if (Math.random() > 0.5) {
    return "greater than 0.5"
  }
  return "less than 0.5"
}

module.exports = {
  someImportantMethodNeedsToBeTested
}
