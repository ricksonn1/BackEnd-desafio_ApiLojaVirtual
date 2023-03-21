'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categorias.hasMany(models.Produtos, {
        foreignKey: 'categoriaId'
      })
    }
  }
  Categorias.init({
    Nome: DataTypes.STRING,
    Descrição: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Categorias',
  },
  );
  return Categorias;
};