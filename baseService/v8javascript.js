// keys
let map = {
    a: 'a',
    num: 3
}

console.log(Object.keys(map))   //[ 'a', 'num' ]

// Array
console.log(Array.isArray(new Array))   //true
console.log(Array.isArray([]))   //true
console.log(Array.isArray(null))   //false
let nums = [1, 2, 3]
nums.forEach(function (item) {
    console.log(item)
})
// 1
// 2
// 3
console.log(nums.filter(function (item) { return item < 3 }))   //[ 1, 2 ]
console.log(nums.map((item) => { return item * 3 }))    //[ 3, 6, 9 ]

// String
console.log('Aabo' + '  Hello '.trim() + 'Aabo')    //AaboHelloAabo

// JSON
let parsedJson = JSON.parse('{"a":"b"}')
console.log(parsedJson.a)   //b
let stringifiedJson = JSON.stringify(map)
console.log(stringifiedJson)    //{"a":"a","num":3}
