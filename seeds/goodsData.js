const { Goods } = require('../models');

const goodsData = [
  {
    name: 'Plain',
    filename:'file-name-here',
    price:'$',
    description: "Get your hands on the most delicious plain bagel at our shop! We serve up freshly baked, hand-rolled bagels with a crispy golden crust and a soft, chewy interior. Our secret recipe includes high-gluten flour, yeast, salt and a touch of sweetness. These bagels will be the best you've ever tasted Come for a taste, stay for the chewy goodness",
    shop_id: '1',
  },
  {
    name: 'Blueberry',
    filename:'file-name-here',
    price:'$',
    description: 'Get a taste of sweet perfection with our blueberry bagels! We take our freshly-baked, hand-rolled plain bagels and add a generous helping of plump, juicy blueberries. The result? A delicious balance of sweet and savory that will have your taste buds singing. Perfectly crispy on the outside and soft on the inside, these blueberry bagels are the ultimate breakfast treat. Come for the blueberries, stay for the bagel-y goodness.',
    shop_id: '1',
  },
  {
    name: 'Everything',
    filename:'file-name-here',
    price:'$',
    description: 'Get a taste of everything delicious with our everything bagels! We take our freshly-baked, hand-rolled plain bagels and top them with a flavorful blend of sesame seeds, poppy seeds, dried garlic and onion. The result is a perfect balance of savory and crunchy that will have your taste buds dancing. Perfectly crispy on the outside and soft on the inside, these everything bagels are the ultimate breakfast treat.',
    shop_id: '1',
  },
  {
    name: 'Cinnamon Sugar',
    filename:'file-name-here',
    price:'$',
    description: 'Get a taste of sweet and spice with our cinnamon sugar bagels! We take our freshly-baked, hand-rolled plain bagels and roll them in a generous coating of cinnamon sugar before baking. The result is a deliciously sweet and fragrant bagel that will have your taste buds begging for more. Perfectly crispy on the outside and soft on the inside, these cinnamon sugar bagels are the ultimate breakfast treat.',
    shop_id: '1',
  },
  {
    name: 'Chocolate',
    filename:'file-name-here',
    price:'$',
    description: "Get a slice of heaven with our chocolate cake! Made with rich, decadent chocolate and baked to perfection, it's a chocolate lover's dream come true. Moist, fluffy and sinfully delicious, our chocolate cake will have you coming back for seconds.",
    shop_id: '2',
  },
  {
    name: 'White',
    filename:'file-name-here',
    price:'$',
    description: 'Get a taste of pure indulgence with our white cake! Made with the finest ingredients, this fluffy and moist cake is iced with a smooth and creamy white icing. It is delicate, light and heavenly delicious. Perfect for any occasion and for those who prefer a less sweet option.',
    shop_id: '2',
  },
  {
    name: 'Red Velvet',
    filename:'file-name-here',
    price:'$',
    description: "Get a taste of luxury with our red velvet cake! Made with the finest ingredients, this moist and fluffy cake has a rich, velvety texture and a delicate cocoa flavor that's perfectly balanced with tangy cream cheese frosting. It's a classic southern delicacy that will leave you feeling like royalty. Perfect for birthdays, weddings or any special occasion.",
    shop_id: '2',
  },
  {
    name: 'Chocolate Chip',
    filename:'file-name-here',
    price:'$',
    description: "Get a bite of happiness with our chocolate chip cookies! Freshly baked and packed with gooey chunks of chocolate, these cookies are the perfect balance of crispy and chewy. They're the ultimate comfort food, and will satisfy all your cravings in one bite.",
    shop_id: '3',
  },
  {
    name: 'Sugar',
    filename:'file-name-here',
    price:'$',
    description: 'Get a taste of sweet perfection with our sugar cookies! Freshly baked and delicately sweet, these cookies are a classic treat that will take you back to childhood memories. They are buttery and tender and can be decorated with various frosting, sprinkles or even stamped with various shapes and designs. Perfect for any occasion and a favorite among kids and adults.',
    shop_id: '3',
  },
  {
    name: 'Peanut Butter',
    filename:'file-name-here',
    price:'$',
    description: "Get a taste of peanut butter heaven with our peanut butter cookies! Freshly baked and loaded with rich, creamy peanut butter, these cookies are the perfect balance of sweet and savory. They're crispy on the outside and chewy on the inside, making them the ultimate comfort food.",
    shop_id: '3',
  }
];

const seedGoods = () => Goods.bulkCreate(goodsData);

module.exports = seedGoods;
