const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');
// const bakedData = require('./bakedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
  });
  console.log(users);
  // for (const baked of bakedData) {
  //   await Baked.create({
  //     ...baked,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
