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

  // this updates items within the array for the experience property.
  // this property might have different values, but this example is much
  // more of a practical application to push new items into an array within
  // an item in the db
  app.put('/bike', function(req, res) {
    // find the item by id
    Bike.findOne({_id: req.body.id}, function(err, bike) {
      // update based on model name prop, then $push the req.body.experience value
      // as determined by the $each value
      Bike.update({model: req.body.model}, {
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
  }); // ============ THIS EXAMPLE LISTED ABOVE WORKS AS EXPECTED

  // Adding multiple array items need their own body values defined to be able to
  // push multiple values at once
  /*app.put('/bike', function(req, res) {
    // find the item by id
    Bike.findOne({_id: req.body.id}, function(err, bike) {
      // update based on model name prop, then $push the req.body.experience value
      // as determined by the $each value
      Bike.update({model: req.body.model}, {
        $push: {
          experience: { $each: [req.body.experience_1, req.body.experience_2]}
        }
      }, function(err, bike) {
        if (err) {
          res.send(err);
        }

        res.json(bike);
      });
    });
  });*/

};
