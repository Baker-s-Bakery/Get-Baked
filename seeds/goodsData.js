const { Goods } = require('../models');

const goodsData = [
  {
    name: 'Plain',
    filename:'plain-bagel.jpg',
    price:'$',
    description: 'Get your hands on the most delicious plain bagel at our shop! These bagels will be the best you\'ve ever tasted Come for a taste, stay for the chewy goodness',
    shop_id: '1',
  },
  {
    name: 'Blueberry',
    filename:'blueberry-bagel.jpg',
    price:'$',
    description: 'Get a taste of sweet perfection with our blueberry bagels!',
    shop_id: '1',
  },
  {
    name: 'Everything',
    filename:'everything-bagel.jpg',
    price:'$',
    description: 'Perfectly crispy on the outside and soft on the inside, these everything bagels are the ultimate breakfast treat.',
    shop_id: '1',
  },
  {
    name: 'Cinnamon Sugar',
    filename:'cinnamon-sugar-bagel.jpg',
    price:'$',
    description: 'Get a taste of sweet and spice with our cinnamon sugar bagels!',
    shop_id: '1',
  },
  {
    name: 'Chocolate',
    filename:'chocolate-cake.jpg',
    price:'$',
    description: 'Get a slice of heaven with our chocolate cake a chocolate lover\'s dream come true!',
    shop_id: '2',
  },
  {
    name: 'White',
    filename:'white-cake.jpeg',
    price:'$',
    description: 'Get a taste of pure indulgence with our white cake! Perfect for those who prefer a less sweet option.',
    shop_id: '2',
  },
  {
    name: 'Red Velvet',
    filename:'red-velvet-cake.jpg',
    price:'$',
    description: 'Get a taste of luxury with our red velvet cake! Perfect for birthdays, weddings or any special occasion.',
    shop_id: '2',
  },
  {
    name: 'Chocolate Chip',
    filename:'chocolate-chip-cookies.jpeg',
    price:'$',
    description: 'Get a bite of happiness with our chocolate chip cookies! They\'re the ultimate comfort food, and will satisfy all your cravings in one bite.',
    shop_id: '3',
  },
  {
    name: 'Sugar',
    filename:'sugar-cookies.jpg',
    price:'$',
    description: 'Get a taste of sweet perfection with our sugar cookies! Perfect for any occasion and a favorite among kids and adults.',
    shop_id: '3',
  },
  {
    name: 'Peanut Butter',
    filename:'peanut-butter-cookies.jpg',
    price:'$',
    description: 'Get a taste of peanut butter heaven with our peanut butter cookies! They\'re crispy on the outside and chewy on the inside.',
    shop_id: '3',
  }
];

const seedGoods = () => Goods.bulkCreate(goodsData);

module.exports = seedGoods;
