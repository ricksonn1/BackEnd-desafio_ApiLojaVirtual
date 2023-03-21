const { Router } = require('express')
const ProdutoController = require('../controllers/ProdutoController.js')

const router = Router()

router
    .get('/produtos', ProdutoController.pegaTodosOsProdutos)
    .get('/produtos/:id', ProdutoController.pegaUmProduto)
    .post('/produtos', ProdutoController.criaProduto)
    .post('/produtos/:id/restaura', ProdutoController.restauraProduto)
    .put('/produtos/:id', ProdutoController.atualizaUmProduto)
    .delete('/produtos/:id', ProdutoController.deletaProduto)


module.exports = router;