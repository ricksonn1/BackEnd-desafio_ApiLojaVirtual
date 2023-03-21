const { Router } = require('express')
const ProdutoController = require('../controllers/ProdutoController.js')
const CategoriaController = require('../controllers/CategoriaController.js')

const router = Router()

router
    .get('/categorias', CategoriaController.pegaTodosAsCategorias)
    .get('/categorias/:categoriaId/produtos', CategoriaController.pegaProdutosPorCategoria)
    .post('/categorias', CategoriaController.criaCategoria)
    .put('/categorias/:id', CategoriaController.atualizaUmaCategoria)
    .delete('/categorias/:categoriaId/produtos', CategoriaController.deletaUmaCategoriaETodosSeusProdutos)


module.exports = router;