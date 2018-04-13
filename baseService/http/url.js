const url = require('url')
const http = require('http')

http.createServer(function (request, response) {
    let requestUrl = request.url
    let parsedUrl = url.parse(requestUrl)
    console.log(parsedUrl)
    console.log(parsedUrl.query)

    let parsedUrlWithQueryStringObject = url.parse(requestUrl, true)
    console.log(parsedUrlWithQueryStringObject)
    console.log(parsedUrlWithQueryStringObject.query)
    console.log(parsedUrlWithQueryStringObject.query.sss)
    console.log(parsedUrlWithQueryStringObject.query['sss'])

    let urlFormated = url.format({
        protocol: 'http:',
        host: 'www.baidu.com',
        pathname: '/p/a/t/h',
        search: 'query=string'
    })
    console.log(urlFormated)

    let  urlResolved = url.resolve('http://www.baidu.com/image', '/shanghai')
    console.log(urlResolved)
    urlResolved = url.resolve('http://www.baidu.com/image', '../shanghai')
    console.log(urlResolved)
    urlResolved = url.resolve('http://www.baidu.com/image', './shanghai')
    console.log(urlResolved)
    urlResolved = url.resolve('http://www.baidu.com/image', 'shanghai')
    console.log(urlResolved)
    urlResolved = url.resolve('http://www.baidu.com/image/', 'shanghai')
    console.log(urlResolved)
    urlResolved = url.resolve('www/baidu/com/image/', 'shanghai')
    console.log(urlResolved)

    response.writeHead(200, { 'content-type': 'text/plain' })
    response.end('end')

}).listen(888)

// 'http://localhost:888/z/sa/af?sss=8#hash'