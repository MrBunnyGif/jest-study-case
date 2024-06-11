const fetchPromise = require("./sum")

test("data is peanut", () => {
    return expect(fetchPromise()).resolves.toBe("peanut")
})

test("promise rejected", ()=>{
    return expect(fetchPromise()).rejects.toThrow("error")
})