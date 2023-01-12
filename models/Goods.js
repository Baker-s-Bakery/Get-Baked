const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Goods extends Model {}

Goods.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    shop_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'shop',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'goods',
  }
);

module.exports = Goods;
