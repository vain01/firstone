const http = require('http')
const qs = require('querystring')

let server = http.createServer(function (req, res) {
    let body = ''
    req.on('data', function (chunk) {
        body += chunk
    })
    req.on('end', function () {
        res.writeHead(200)
        res.end()
        console.log('\ngot name:' + qs.parse(body).name)
    })
})

server.listen(3334, function () {
    console.log('server started on 3334')
})