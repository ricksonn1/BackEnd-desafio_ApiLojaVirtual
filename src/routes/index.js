const bodyParser = require('body-parser');
const produto = require('./produtosRoute');
const categoria = require('./categoriaRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(produto)
    app.use(categoria)
}


