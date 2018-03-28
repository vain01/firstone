/**
* 这里是response handler
*/
const fs = require('fs');

module.exports = {
    send(ctx, content, type, status) {
        ctx.body = content;
        ctx.type = type || 'text/plain';
        ctx.status = status || 200;
    },
    sendHtml(ctx, html, status) {
        ctx.body = fs.readFileSync(html, "utf-8");
        ctx.status = status || 200
        ctx.type = 'text/html'
    },
    sendObject(ctx, obj, status) {
        ctx.body = obj
        ctx.status = status || 200;
        ctx.type = 'application/json'
    }
}
