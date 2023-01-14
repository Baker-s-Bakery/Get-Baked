const router = require('express').Router();
const { Goods, Shop } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');


// GET all shop for homepage
router.get('/', async (req, res) => {
  try {
    const dbShopData = await Shop.findAll({
      include: [
        {
          model: Goods,
          attributes: ['name', 'description'],
        },
      ],
    });

    const shops = dbShopData.map((shop) =>
      shop.get({ plain: true })
    );
    console.log('shops; ', shops);
    res.render('homepage', {
      shops,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one category
// Use the custom middleware before allowing the user to access the shop
router.get('/shop/:id', withAuth, async (req, res) => {
  try {
    const dbShopData = await Shop.findByPk(req.params.id, {
      include: [
        {
          model: Goods,
          attributes: [
            'id',
            'name',
            'filename',
            'description',
          ],
        },
      ],
    });

    const shop = dbShopData.get({ plain: true });
    res.render('goods', { shop, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one goods
// Use the custom middleware before allowing the user to access the goods
router.get('/goods/:id', withAuth, async (req, res) => {
  try {
    const dbgoodsData = await Goods.findByPk(req.params.id);

    const goods = dbgoodsData.get({ plain: true });

    res.render('goods', { goods, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
