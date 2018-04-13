console.log(1)
process.nextTick(() => {
    console.log(3)
})
console.log(2)

// 1
// 2
// 3

// console.log(4)
// setImmediate(() => {
//     console.log(5)
// })
// console.log(6)