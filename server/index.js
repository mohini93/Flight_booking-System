const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const flightRoutes = require("./routes/flightRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const walletRoutes = require("./routes/walletRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/flightdb");

app.use("/api/flights", flightRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/wallet", walletRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
