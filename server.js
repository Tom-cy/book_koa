const Koa  = require('koa2')
const app = new Koa()

const serve = require('koa-static')

app.use(serve('./assets'))

var server = app.listen(6224 , ()=>{
    const host = server.address().address
    const port = server.address().port
    console.log('app start' , host , port)
})