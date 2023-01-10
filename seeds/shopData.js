const { Shop } = require('../models');

const shopData = [
    {
        Name: 'Bagels',
        Description: 
    },
    {
        Name: 'Cakes',
        Description: 
    },
    {
        Name: 'Cookies',
        Description: 'Grandma move over, homemade flavor  disks'
    }
]

const seedShop = () => Shop.bulkCreate(shopData);

module.exports = seedShop;