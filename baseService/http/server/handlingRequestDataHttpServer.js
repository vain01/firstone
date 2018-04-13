const http = require('http')

http.createServer(function (request, response) {       
    console.log(request.method)
    console.log(request.headers)
    let body = []
    request.on('data', function (chunck) {
        body.push(chunck)
    })
    request.on('end', function () {
        body = Buffer.concat(body)
        console.log(body.toString())
        response.end()
    })
    
}).listen(80)
