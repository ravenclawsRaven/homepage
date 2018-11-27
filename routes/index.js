var express = require('express');
var router = express.Router();

var models = require('../models');
var queue = require('../SC/SC.js')

/* GET home page. */

router.get('/', function(req, res,next) {
  models.planets.findAll({where: {
    id: 2}
  }).then(function(planets) {
    res.render('index', { title: "Whooops",
      planets: planets});
      console.log("queue is: " + planets.p1)

  });
});

router.post('/', function(req, res) {
  if (req.body.method == "build") {  
    queue.queue(req.body.building, models.planets)
    });
  }
});


module.exports = router;
