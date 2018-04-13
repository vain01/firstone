const moduleA = require('./module_a')
const Person = require('./module_b')
const aabo = new Person('aabo')

console.log(moduleA.name)
console.log(moduleA.data)
console.log(moduleA.getPrivate())

console.log(aabo.name)
aabo.talk()