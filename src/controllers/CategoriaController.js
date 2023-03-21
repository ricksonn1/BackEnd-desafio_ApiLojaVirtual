// const database = require('../models')

const { CategoriasServices, ProdutosServices } = require('../services')
const categoriasServices = new CategoriasServices()
const produtosServices = new ProdutosServices()

class CategoriaController {

    static async pegaTodosAsCategorias(req, res) {

        try {
            const todasAsCategoriasEProdutos = await categoriasServices.pegaTodosOsRegistros()
            res.status(200).json(todasAsCategoriasEProdutos)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async pegaProdutosPorCategoria(req, res) {
        const { categoriaId } = req.params
        try {
            const todosOsProdutosPorCategoria = await produtosServices.pegaCategoriasESeusProdutos({ categoriaId: categoriaId }, { limit: 20 })
            return res.status(200).json(todosOsProdutosPorCategoria)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async criaCategoria(req, res) {
        const categoriaNova = req.body
        try {
            await categoriasServices.criaRegistro(categoriaNova)
            res.status(200).json({ mensagem: `Categoria criada com sucesso!` })
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async atualizaUmaCategoria(req, res) {
        const { id } = req.params
        const categoriaAtualizada = req.body
        try {
            await categoriasServices.atualizaRegistro(categoriaAtualizada, id)
            res.status(200).json({ mensagem: `Categoria ${id} atualizada com sucesso!` })
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async deletaUmaCategoriaETodosSeusProdutos(req, res) {
        const { categoriaId } = req.params
        try {
            await categoriasServices.deletaRegistro(Number(categoriaId))
            res.status(200).json({ mensagem: `Categoria ${categoriaId} e produtos relacionados a ela  deletado com sucesso` })
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

module.exports = CategoriaController;