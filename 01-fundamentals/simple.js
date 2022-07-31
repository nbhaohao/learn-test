const {sum, subtract, sumAsync} = require('./math')

test('sub adds numbers', () => {
  const result = sum(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

test('subtractTest', () => {
  const result = subtract(7, 3)
  const expected = 4
  expect(result).toBe(expected)
})

test('sumAsync', async () => {
  const result = await sumAsync(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

async function test(title, callback) {
  try {
    await callback()
    console.log(`✅ ${title}`)
  } catch (e) {
    console.error(`❌ ${title}`)
    console.error(e)
  }
}


function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}
