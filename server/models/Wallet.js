const mongoose = require("mongoose");

module.exports = mongoose.model("Wallet", new mongoose.Schema({
  balance: { type: Number, default: 50000 }
}));
