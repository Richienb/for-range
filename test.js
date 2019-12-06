import test from "ava"
import forRange from "."

test("main", (t) => {
    const check = (i) => t.true([2, 6].includes(i))

    forRange({ min: 2, max: 10, step: 2 }, (i) => {
        if (i === 4) return // Skip for 4
        if (i === 8) return false // Stop for loop at 8
        check(i)
    })
})
