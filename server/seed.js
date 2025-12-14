const mongoose = require("mongoose");
const Flight = require("./models/Flight");

mongoose.connect("mongodb://127.0.0.1:27017/flightdb");

const flights = Array.from({ length: 15 }, (_, i) => ({
  flight_id: `AI${100 + i}`,
  airline: ["Air India", "IndiGo", "Vistara"][i % 3],
  departure_city: "Delhi",
  arrival_city: "Mumbai",
  base_price: 2000 + i * 50,
  current_price: 2000 + i * 50
}));

Flight.insertMany(flights).then(() => {
  console.log("Flights Seeded");
  process.exit();
});
