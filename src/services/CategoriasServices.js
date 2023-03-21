const Services = require('./Services');
const database = require('../models');

class CategoriasServices extends Services {
    constructor() {
        super('Categorias')
    }

    async deletaUmaCategoriaETodosSeusProdutos(categoriaId) {
        return database[this.nomeDoModelo].destroy({ where: { categoriaId: categoriaId } })
    }

}

module.exports = CategoriasServices;