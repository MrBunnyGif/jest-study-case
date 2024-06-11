function fetchPromise() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("peanut")
        }, 1000);
    })
}

module.exports = fetchPromise