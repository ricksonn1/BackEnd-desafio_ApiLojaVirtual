const database = require('../models')


const { ProdutosServices } = require('../services')
const produtosServices = new ProdutosServices()

class ProdutoController {

    static async pegaTodosOsProdutos(req, res) {

        try {
            const todosOsProdutos = await produtosServices.pegaTodosOsRegistros()
            res.status(200).json(todosOsProdutos)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }


    static async pegaUmProduto(req, res) {
        const { id } = req.params
        try {
            const umProduto = await produtosServices.pegaUmRegistro(id)
            res.status(200).json(umProduto)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async criaProduto(req, res) {
        const produtoNovo = req.body
        try {
            await produtosServices.criaRegistro(produtoNovo)
            res.status(200).json({ mensagem: `Produto criado com sucesso!` })
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async atualizaUmProduto(req, res) {
        const { id } = req.params
        const produtoAtualizado = req.body
        try {
            await produtosServices.atualizaRegistro(produtoAtualizado, id)
            res.status(200).json({ mensamge: `Produto ${id} atualizado com sucesso!` })
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async deletaProduto(req, res) {
        const { id } = req.params
        try {
            const deletaUmProduto = await produtosServices.deletaRegistro(id)
            res.status(200).json({ mensagem: `Produto ${id} deletado com sucesso` })
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async restauraProduto(req, res) {
        const { id } = req.params
        try {
            await produtosServices.restauraRegistro(id)
            res.status(200).json({mensagem: `Produto ${id} restaurado com sucesso!`})
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

}

module.exports = ProdutoController;