var express = require('express');
var router = express.Router();
var basicController = require('../controllers/demoController');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', basicController);


module.exports = router;
