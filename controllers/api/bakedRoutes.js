const router = require('express').Router();
const { Goods } = require('../../models');
// const withAuth = require('../../utils/auth');
// withAuth,

router.post('/', async (req, res) => {
  try {
    const newGoods = await Goods.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newGoods);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const goodsData = await Goods.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!goodsData) {
//       res.status(404).json({ message: 'No Goods goods found with this id!' });
//       return;
//     }

//     res.status(200).json(goodsData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;