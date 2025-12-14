const router = require("express").Router();
const Flight = require("../models/Flight");

router.get("/", async (req, res) => {
  const flights = await Flight.find().limit(10);
  res.json(flights);
});

module.exports = router;
