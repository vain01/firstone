const http = require('http')

let options = {
    hostname: "127.0.0.1",
    port: 80,
    path: '/',
    method: 'GET',
    headers: {}
}

// http.get(options, function (response) {
http.get('http://127.0.0.1/', function (response) {
    let body = []
    console.log(response.statusCode)
    console.log(response.headers)

    response.on('data', function (chunk) {
        body.push(chunk)
    })

    response.on('end', function () {
        body = Buffer.concat(body)
        console.log(body.toString())
    })
})