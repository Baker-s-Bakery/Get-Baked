const { Shop } = require('../models');

const shopData = [
  {
    name: 'Bagels',
    filename:'bagel-pile.jpg',
    description: 'Round and tasty, with or without spreads.',
  },
  {
    name: 'Cakes',
    filename:'cake-plate.jpeg',
    description: 'Large and small, for fancy occaisions or relaxation.',
  },
  {
    name: 'Cookies',
    filename:'assorted-cookies.jpg',
    description: 'Not your grandma\'s, but freshly made all the same.'
  },
];

const seedShop = () => Shop.bulkCreate(shopData);

module.exports = seedShop;
