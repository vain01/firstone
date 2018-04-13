console.log('a')
exports.name = 'module_a'
exports.data = 'this is module a'
let privateVariable = 5
exports.getPrivate = function () {
    return privateVariable
}