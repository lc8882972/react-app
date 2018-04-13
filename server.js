var webpack = require('webpack')
var express = require('express')
var app = express()
const port = process.env.PORT || 3000
var history = require('connect-history-api-fallback')
var webpackConfig = require('./build/webpack.config.js')
var compiler = webpack(webpackConfig)

app.use(history())
app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))

app.use(require("webpack-hot-middleware")(compiler, {
  path: '/__webpack_hmr',
  heartbeat: 2000
}))

app.use('/static', express.static('./static'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.get("/api/user", function (req, res) {
  res.json({ err_code: 0, data: { id: 1, name: 'Tom' } })
})

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})