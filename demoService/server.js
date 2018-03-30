const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-body');
const Router = require('koa-router');
const router = new Router();
const log = require('./server/serverLogger')
const demoAction = require('./actions/demoAction')

app.use(bodyParser());
app.use(router.routes());

router.get('/getSortedList', async function (ctx, next) {
    try {
        log.info(ctx.request)
        log.info(ctx.request.url)
        await demoAction.getSortedList(ctx)
    } catch (e) {
        errorResp(ctx, e)
    }
});

router.get('/getFactorial', async function (ctx, next) {
    try {
        log.info(ctx.request)
        log.info(ctx.request.url)
        await demoAction.getFactorial(ctx)
    } catch (e) {
        errorResp(ctx, e)
    }
});

router.post('/postMultiplicationTable', async function (ctx, next) {
    try {
        log.info(ctx.request)
        log.info(ctx.request.body)
        await demoAction.postMultiplicationTable(ctx)
    } catch (e) {
        errorResp(ctx, e)
    }
});

function errorResp(ctx, err) {
    log.error(err)
    let map = {}
    map["error"] = "SERVICE ERROR"
    map["stash"] = err.stack
    res.sendObject(ctx, map, 400)
}

app.listen(process.env.npm_package_config_port || 10000);
log.info('Server started on ' + (process.env.npm_package_config_port || 10000))