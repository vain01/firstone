require('http').createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'image/tiff' })
    let stream = require('fs').createReadStream('image/Desert.tiff')
    stream.on('data', function (data) {
        res.write(data)
    })
    stream.on('end', function () {
        res.end()
    })

    // res.writeHead(200, { 'Content-Type': 'image/jpeg' })
    // require('fs').createReadStream('image/Chrysanthemum.jpg').pipe(res)

}).listen(3000)