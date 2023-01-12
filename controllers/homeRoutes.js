const router = require('express').Router();
const { Goods, Shop } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all shopCategories for homepage
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

    const shopCategories = dbShopData.map((shop) =>
      shop.get({ plain: true })
    );

    res.render('homepage', {
      shopCategories,
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
            'description',
          ],
        },
      ],
    });

    const shop = dbShopData.get({ plain: true });
    res.render('shop', { shop, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
// Use the custom middleware before allowing the user to access the painting
router.get('/painting/:id', withAuth, async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });

    res.render('painting', { painting, loggedIn: req.session.loggedIn });
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
