const http = require('http')

const hostname = '127.0.0.1'
const port = 80

const server = http.createServer(function (request, response) {
    response.writeHead(200, { 'content-type': 'text/plain' })
    response.end('Hello world.\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})