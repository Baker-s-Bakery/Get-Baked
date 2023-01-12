// const sequelize = require('../config/connection');
// const { Shop, Bakedgoods, Recipes, Ingredients } = require('../models');

// const shopData = require('./shopData');
// const bakedgoodsData = require('../seeds/bakedgoodsData.json');
// const recipeData = require('../seeds/recipeData.json');
// const ingredientData = require('../seeds/ingredientData.json');
// const userData = require('../seeds/userData.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const shop = await Shop.bulkCreate(shopData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const baked of bakedgoodsData) {
//     await Bakedgoods.create({
//       ...baked,
//       shop_id: shop[Math.floor(Math.random() * shop.length)].id,
//     });
//   }

//   for (const recipe of recipeData) {
//     await Recipes.create({
//       ...recipe,
//       baked_id: baked[Math.floor(Math.random() * baked.length)].id,
//     });
//   }

//   for (const ingredient of ingredientData) {
//     await Ingredients.create({
//       ...ingredient,
//       recipe_id: recipe[Math.floor(Math.random() * recipe.length)].id,
//     });
//   }

//   await userData();

//   process.exit(0);
// };

// seedDatabase();
