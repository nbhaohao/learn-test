const utils = require("./index");

const originalMethod = utils.someImportantMethodNeedsToBeTested

describe("index", () => {
  beforeEach(() => {
    // our simple mock staff
    utils.someImportantMethodNeedsToBeTested = () => "greater than 0.5"
  })
  afterEach(() => {
    utils.someImportantMethodNeedsToBeTested = originalMethod
  })
  test("some method", () => {
    expect(utils.someImportantMethodNeedsToBeTested()).toBe("greater than 0.5")
  })
})
