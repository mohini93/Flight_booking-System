const mongoose = require("mongoose");

module.exports = mongoose.model("Flight", new mongoose.Schema({
  flight_id: String,
  airline: String,
  departure_city: String,
  arrival_city: String,
  base_price: Number,
  current_price: Number,
  attempt_count: { type: Number, default: 0 },
  last_attempt: Date
}));
