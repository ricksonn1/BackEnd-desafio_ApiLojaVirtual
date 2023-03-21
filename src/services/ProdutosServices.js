const Services = require('./Services')
const database = require('../models');


class ProdutosServices extends Services {
    constructor() {
        super('Produtos')
    }
    async pegaCategoriasESeusProdutos(where = {}, agregadores) {
        return database[this.nomeDoModelo].findAndCountAll({ where: { ...where }, ...agregadores })
    }
}

module.exports = ProdutosServices;