const Shop = require('./Shop');
const Goods = require('./Goods');
// const Recipes = require('./Recipes');
// const Ingredients = require('../archive/Models/Ingredients');
const User = require('./User');

// Shop.hasMany(Goods, {});

Goods.belongsTo(Shop, {
  foreignKey: 'shop_id',
});

// Goods.hasOne(Recipes, {
//   foreignKey: 'baked_id',
// });

// Recipes.belongsTo(Goods, {
//   foreignKey: 'baked_id',
// });

// Recipes.hasOne(Ingredients, {
//   foreignKey: 'recipe_id',
// });

// Ingredients.belongsTo(Recipes, {
//   foreignKey: 'recipe_id',
// });

module.exports = { Shop, Goods, User };
