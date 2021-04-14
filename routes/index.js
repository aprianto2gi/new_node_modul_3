var express = require('express');
var router = express.Router();
var homeController = require("../controller/homeController");
var formMiddle= require("../middleware/form_middle");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    title: "Babastudio", slider1:"p1.png", slider2:"p2.png", slider3:"p3.png" 
  });
});

router.get('/form', function(req, res, next) {
  res.render('form');
});

router.post('/proses', homeController.prosesPost );

router.get('/proses', homeController.prosesGet );

router.get('/proses/:id', homeController.posesParams );




module.exports = router;
