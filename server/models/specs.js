'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Specs.belongsTo(models.Products);
    }
  };
  Specs.init({
    ProductId: DataTypes.INTEGER,
    color: DataTypes.STRING,
    capacity: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Specs',
  });
  return Specs;
};