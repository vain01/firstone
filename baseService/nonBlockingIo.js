console.log(Date.now() + 'hello')
let startTime = Date.now()
setTimeout(() => {
    console.log(Date.now() + 'world')
    console.log(Date.now() - startTime + 'world')
}, 500);

setTimeout(() => {
    console.log(Date.now() + 'processing...')
    for (let index = 0; index < 1900000000; index++) {
        let x = 'a'
    }
}, 100);

console.log(Date.now() + 'bye')

// hello
// bye
// processing...
// world