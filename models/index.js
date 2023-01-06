const Shop = require('./Shop');
const Bakedgoods = require('./Bakedgoods');
const Recipes = require('./Recipes');
const Ingredients = require('./Ingredients');
const User = require('./User');

Shop.hasMany(Bakedgoods, {
  foreignKey: 'shop_id',
});

Bakedgoods.belongsTo(Shop, {
  foreignKey: 'shop_id',
});

Bakedgoods.hasOne(Recipes, {
  foreignKey: 'baked_id',
});

Recipes.belongsTo(Bakedgoods, {
  foreignKey: 'baked_id',
});

Recipes.hasOne(Ingredients, {
  foreignKey: 'recipe_id',
});

Ingredients.belongsTo(Recipes, {
  foreignKey: 'recipe_id',
});


module.exports = { Shop, Bakedgoods, Recipes, Ingredients, User };
