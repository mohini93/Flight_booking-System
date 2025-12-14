const router = require("express").Router();
const Wallet = require("../models/Wallet");

router.get("/", async (req, res) => {
  let wallet = await Wallet.findOne();
  if (!wallet) wallet = await Wallet.create({});
  res.json(wallet);
});

module.exports = router;
