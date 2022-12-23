const router = require('express').Router();
const { Baked } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBaked = await Baked.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBaked);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const bakedData = await Baked.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!bakedData) {
      res.status(404).json({ message: 'No baked goods found with this id!' });
      return;
    }

    res.status(200).json(BakedData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;