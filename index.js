"use strict"

module.exports = ({
    min = 0,
    max,
    step = 1,
}, callback) => {
    for (let i = min; i <= max; i += step) {
        const returnValue = callback(i)
        if (returnValue === false) break
    }
}
