const http = require('http')
const qs = require('querystring')

function send(theName) {
    let options = {
        hostname: '127.0.0.1',
        port: 3334,
        method: 'POST',
        url: '/'
    }
    http.request(options, function (res) {
        let body = ''
        res.setEncoding('utf8')
        res.on('data', function () {})
        res.on('end', function () {
            console.log('\n ***** complete *****')
            process.stdout.write('\n your name:')
        })
    }).end(qs.stringify({ name: theName }))
}

process.stdout.write('\n your name:')
process.stdin.resume()
process.stdin.setEncoding('utf-8')
process.stdin.on('data', function (name) {
    send(name.replace('\n', ''))
})
