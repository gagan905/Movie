var express = require('express');
var router = express.Router();
var ctrMain = require('../controllers/main');
 var menuBar = require('../controllers/movie');
var ctrlrecipe = require('../controllers/movie');

router.get('/about', menuBar.about);

router.get('/list', ctrlrecipe.homelist);

router.get('/recipe/:recipeid', ctrlrecipe.recipeInfo);

router.route('/new')
.get(ctrlrecipe.AddNewRecipe)
.post(ctrlrecipe.doAddNewRecipe);


module.exports = router;