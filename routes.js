var mongoose = require('mongoose');
var Bike = require('./models/bike');

module.exports = function(app) {

  // initial route check
  app.get('/', function(req, res) {

    res.json({message: "Everything is hooked up and running the way it should."});
  });

  // create a new bike instance
  app.post('/bike', function(req, res) {

    var bike = new Bike();

    bike.model = req.body.model;
    bike.year = req.body.year;
    bike.brand = req.body.brand;
    bike.wheel_size = req.body.wheel_size;
    bike.category = req.body.category;
    bike.experience = req.body.experience;
    bike.model_family = req.body.model_family;

    bike.save(function(err, bike) {
      if (err) {
        res.send(err);
      }

      res.json(bike);
    });
  });

  app.get('/bike', function(req, res) {

    Bike.find(function(err, bikes) {
      if (err) {
        res.send(err);
      }

      res.json(bikes);
    });
  });

  app.put('/bike', function(req, res) {
    Bike.findOne({_id: req.body.id}, function(err, bike) {
      Bike.update({_id: req.body.id}, {
        $push: {
          experience: { $each: [req.body.experience]}
        }
      }, function(err, bike) {
        if (err) {
          res.send(err);
        }

        res.json(bike);
      });
    });
  });

};
