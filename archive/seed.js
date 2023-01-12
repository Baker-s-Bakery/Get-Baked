// const sequelize = require('../config/connection');
// const { Baked, User } = require('../models');

// const userData = require('../seeds/userData.json');
// // const bagelData = require('./bagelRecipeData.json');
// // const cakeData = require('./cakeRecipeData.json');
// // const cookieData = require('./cookieRecipeData.json');
// const bakedData = require('./bakedData.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });
//   // const baked = await Baked.bulkCreate(bakedData, {
//   //   individualHooks: true,
//   // });
//   // console.log(users);
//   // console.log(baked);
//   for (const baked of [bakedData]) {
//     await Baked.create({
//       ...baked,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

// seedDatabase();
