const fetchPromise = require("./sum")

test("data is peanut", async () => {
    const data = await fetchPromise()
    expect(data).toBe("peanut")
})