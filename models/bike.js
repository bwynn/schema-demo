var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BikeSchema = new Schema({
  model: String,
  year: Number,
  brand: String,
  wheel_size: String,
  category: String,
  experience: [String],
  model_family: String
});

module.exports = mongoose.model("Bike", BikeSchema);
