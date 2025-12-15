const router = require("express").Router();
const Flight = require("../models/Flight");
const Booking = require("../models/Booking");
const Wallet = require("../models/Wallet");
const { v4: uuid } = require("uuid");
const generatePDF = require("../utils/pdfGenerator");

router.post("/", async (req, res) => {
  const { flightId, passenger } = req.body;
  const flight = await Flight.findById(flightId);
  const wallet = await Wallet.findOne();

  const now = new Date();
  if (flight.last_attempt && now - flight.last_attempt < 5 * 60 * 1000) {
    flight.attempt_count++;
    if (flight.attempt_count >= 3) {
      flight.current_price = flight.base_price * 1.1;
      setTimeout(async () => {
        flight.current_price = flight.base_price;
        flight.attempt_count = 0;
        await flight.save();
      }, 10 * 60 * 1000);
    }
  } else {
    flight.attempt_count = 1;
  }

  flight.last_attempt = now;
  await flight.save();

  if (wallet.balance < flight.current_price)
    return res.status(400).json({ error: "Insufficient balance" });

  wallet.balance -= flight.current_price;
  await wallet.save();

  const booking = await Booking.create({
    passenger_name: passenger,
    flight_id: flight.flight_id,
    airline: flight.airline,
    route: `${flight.departure_city} → ${flight.arrival_city}`,
    price_paid: flight.current_price,
    pnr: uuid(),
    booked_at: new Date()
  });

  generatePDF(booking);
  res.json(booking);
});

router.get("/", async (_, res) => {
  res.json(await Booking.find());
});

module.exports = router;
