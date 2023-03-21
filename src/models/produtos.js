'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    static associate(models) {
      Produtos.belongsTo(models.Categorias, {
        foreignKey: 'categoriaId'
      })
    }
  }
  Produtos.init({
    Nome: DataTypes.STRING,
    Descrição: DataTypes.STRING,
    Preço: DataTypes.DOUBLE,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Produtos',
  },
 );
  return Produtos;
};