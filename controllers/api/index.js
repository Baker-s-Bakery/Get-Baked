const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bakedRoutes = require('./bakedRoutes');

router.use('/users', userRoutes);
router.use('/bakedGoods', bakedRoutes);

module.exports = router;