// function sum(a, b) {
//     return a + b
// }

// module.exports = sum

function myFun(a) {
    if (typeof a !== "number")
        throw new Error("invalid input")
}

module.exports = myFun
