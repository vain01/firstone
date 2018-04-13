require('http').createServer(function (req, res) {
    if ('/' == req.url) {
        res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8", })
        let body = [
            '<form method="POST" action="/url">',
            '<h1>My form</h1>',
            '<fieldSet>',
            '<p><label>姓名</label><p>',
            '<p><input type="text" name="name" /></p>',
            '<p><input type="submit" value="Submit" /></p>',
            '</form>'
        ]
        res.end(body.join(''))
    }
    else if ('/url' == req.url && 'POST' == req.method) {
        let body = ''
        req.on('data', function (chunk) {
            body += chunk
        })
        req.on('end', function () {
            console.log(body)
            res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8", })
            res.end('<p>Content-Type:' + req.headers['content-type'] + '</p>' +
                '<p>Data:' + body + '</p>' +
                '<p>你的名字是：' + require('querystring').parse(body).name + '</p>')
        })
    }
    else if ('/url' == req.url) {
        res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8", })
        res.end('你发送了' + req.method + '请求')
    }
    else {
        res.writeHead(404)
        res.end()
    }
}).listen(3333);