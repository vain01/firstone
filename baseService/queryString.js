const querystring = require('querystring')

let parsedQuerystring = querystring.parse('foo=bar&name=mike&name=jack&xxx')
console.log(parsedQuerystring)

let stringifiedQuerystring = querystring.stringify({ foo: 'bar', name: ['zhang', 'chen'], xxx: '' })
console.log(stringifiedQuerystring)