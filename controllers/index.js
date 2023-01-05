const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//handlebar route
app.get('/',function(req, res){
    res.render('homepage');
});
app.get('/login',function(req, res){
    res.render('login');
});
app.get('/recipes',function(req, res){
    res.render('recipes');
});
app.get('/shop',function(req, res){
    res.render('shop');
});

app.use(express.static(path.join(_dirnmae,'public')));

app.listen(PORT, () => console.log('Server listening on port' + PORT));
