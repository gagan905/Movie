const express = require('express');
const router = express.Router();
const movieCtrl = require('../controllers/movie');

var cors = require('cors');
var app = express();

app.use(cors());

router
.route('/movies')
.get(movieCtrl.getList)
.post(movieCtrl.createList);

router
    .route('/movies/:movieid')
    .get(movieCtrl.singleList)
.put(movieCtrl.updateList)
.delete(movieCtrl.deleteList)


module.exports = router;