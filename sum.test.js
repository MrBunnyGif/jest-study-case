const fetchData = require("./sum")

test("data is peanut", done => {
    function callback(data) {
        try {
            expect(data).toBe("peanut")
            done()
        }
        catch (err) {
            done(err)
        }
    }

    fetchData(callback)
})