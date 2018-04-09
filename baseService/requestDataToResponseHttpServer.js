const http = require('http')

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    
    request.on('data', function (chunck) {
        console.log(chunck)
        console.log(chunck.toString())
        response.write(chunck)
    })
    request.on('end', function () {
        response.end()
    })
}).listen(80)
