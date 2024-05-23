const myFun = require("./sum")

test("throws on invalid input", () => {
    expect(() => {
        myFun()
    }).toThrow()
})