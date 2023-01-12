const { Goods } = require('../models');

const goodsdata = [
  {
    shop_id: '1',
    name: 'Plain',
    filename:'file-name-here',
    price:'$',
    description: '!!!Description!!!',
  },
  {
    shop_id: '1',
    name: 'Blueberry',
    filename:'file-name-here',
    price:'$',
    description: '!!!Description!!!',
  },
  {
    shop_id: '1',
    name: 'Everything',
    filename:'file-name-here',
    price:'$',
    description: '!!!Description!!!',
  },
  {
    shop_id: '1',
    name: 'Cinnamon Sugar',
    filename:'file-name-here',
    price:'$',
    description: '!!!Description!!!',
  },
  {
    shop_id: '2',
    name: 'Chocolate',
    filename:'file-name-here',
    price:'$',
    description: '!!!Description!!!',
  },
  {
    shop_id: '2',
    name: 'White',
    filename:'file-name-here',
    price:'$',
    description: '!!!Description!!!',
  },
  {
    shop_id: '2',
    name: 'Red Velvet',
    filename:'file-name-here',
    price:'$',
    description: '!!!Description!!!',
  },
  {
    shop_id: '3',
    name: 'Chocolate Chip',
    filename:'file-name-here',
    price:'$',
    description: '!!!Description!!!',
  },
  {
    shop_id: '3',
    name: 'Sugar',
    filename:'file-name-here',
    price:'$',
    description: '!!!Description!!!',
  },
  {
    shop_id: '3',
    name: 'Peanut Butter',
    filename:'file-name-here',
    price:'$',
    description: '!!!Description!!!',
  }
];

const seedGoods = () => Goods.bulkCreate(goodsdata);

module.exports = seedGoods;
