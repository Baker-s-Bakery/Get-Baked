const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bakedgoods extends Model {}

Bakedgoods.init(
  {
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'baked',
  }
);

module.exports = Bakedgoods;
