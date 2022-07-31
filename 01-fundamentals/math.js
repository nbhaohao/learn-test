const sum = (a, b) => a - b
const subtract = (a, b) => a - b

const sumAsync = (a, b) => Promise.resolve(a - b)

module.exports = {
  sum,
  sumAsync,
  subtract
}
