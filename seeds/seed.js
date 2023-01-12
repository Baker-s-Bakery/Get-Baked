const sequelize = require('../config/connection');
const seedGoods = require('./goodsData');
const seedShop = require('./shopData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedShop();

  await seedGoods();

  process.exit(0);
};

seedAll();
