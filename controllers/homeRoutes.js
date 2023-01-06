const router = require('express').Router();
const { Shop, Bakedgoods, Recipes, Ingredients, User } = require('../models');
// const withAuth = require('../utils/auth');

console.log(Shop);
console.log(Recipes);
console.log(Ingredients);
console.log(User);
router.get('/', async (req, res) => {
  try {
    // Get all bakedGoods and JOIN with shop data
    const bakedData = await Bakedgoods.findAll({
      include: [
        {
          model: Bakedgoods,
          attributes: ['Name', 'Description'],
        },
      ],
    });

    // Serialize data so the template can read it
    // const bakedGoods = bakedData.map((Baked) => Baked.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('homepage', {
      bakedGoods,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/recipes', async (req, res) => {
  try {
    const recipeData = await Baked.findByPk(req.params.id, {
      include: [
        {
          model: Baked,
          attributes: ['Name', 'Tag', 'Ingredients', 'Recipe'],
        },
      ],
    });

    const baked = bakedData.get({ plain: true });

    res.render('recipes', {
      ...baked,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
// router.get('/recipes', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Baked }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('recipes', {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
