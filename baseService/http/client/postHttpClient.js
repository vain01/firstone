const http = require("http")

let options = {
    hostname: "127.0.0.1",
    port: 80,
    path: "/",
    method: "POST",
    headers: {
        "Content_Type": "application/x-www-form-urlencoded"
    }
}

let request = http.request(options, function (response) { })

request.write('aabo is me.')
request.end()