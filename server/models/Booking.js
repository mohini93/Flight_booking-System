const mongoose = require("mongoose");

module.exports = mongoose.model("Booking", new mongoose.Schema({
  passenger_name: String,
  flight_id: String,
  airline: String,
  route: String,
  price_paid: Number,
  pnr: String,
  booked_at: Date
}));
