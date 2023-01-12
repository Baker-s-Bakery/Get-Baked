const { Shop } = require('../models');

const shopData = [
  {
    name: 'Bagels',
    description: 'Round and tasty, with or without spreads.',
  },
  {
    name: 'Cakes',
    description: 'Large and small, for fancy occaisions or relaxation.',
  },
  {
    name: 'Cookies',
    description: 'Not your grandma\'s, but freshly made all the same.'
  },
];

const seedShop = () => Shop.bulkCreate(shopData);

module.exports = seedShop;
