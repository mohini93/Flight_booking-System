# ✈️ Flight Booking System – Full Stack Application

An end-to-end **Flight Booking System** built to demonstrate full-stack development skills, clean architecture, and real-world feature implementation as part of the **XTechon Full-Stack Developer Technical Assignment**.

---

## 🚀 Features

### ✅ Flight Search (Database-Driven)
- Flights are fetched **directly from MongoDB**
- No static JSON, no mock data, no external APIs
- Each search returns **10 flights from the database**

### ✅ Dynamic Pricing Engine
- Tracks booking attempts per flight
- **10% surge price** applied if the same flight is booked **3 times within 5 minutes**
- Price **automatically resets** to base price after **10 minutes**

### ✅ Wallet System
- Default wallet balance: **₹50,000**
- Wallet balance deducted on successful booking
- Booking blocked with validation error if balance is insufficient

### ✅ Ticket PDF Generation
- Automatically generates a downloadable **PDF ticket** after booking
- Includes:
  - Passenger name
  - Airline & Flight ID
  - Route (Departure → Arrival)
  - Final price paid
  - Booking date & time
  - Unique PNR

### ✅ Booking History
- Displays all past bookings
- Shows flight details, price, booking date, and PNR
- Supports re-downloading tickets

---

## 🛠 Tech Stack

**Frontend**
- React (Vite)
- Axios
- TailwindCSS (optional extension)

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- PDFKit

---

## 📁 Project Structure

flight-booking-system/
│
├── server/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── tickets/
│ ├── index.js
│ └── seed.js
│
└── client/
└── src/
├── pages/
├── context/
└── services/


---

## ⚙️ Setup & Installation

### 1️⃣ Prerequisites
- Node.js (v18+)
- MongoDB (running locally)

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
npm run seed
npm start


Backend runs at:

http://localhost:5000

3️⃣ Frontend Setup
cd client
npm install
npm run dev


Frontend runs at:

http://localhost:5173

📡 API Endpoints
Method	Endpoint	Description
GET	/api/flights	Fetch 10 flights from DB
POST	/api/bookings	Book a flight
GET	/api/bookings	Fetch booking history
GET	/api/wallet	Fetch wallet balance
🔐 Surge Pricing Logic (Explanation)

Booking attempts are tracked per flight

If 3 attempts occur within 5 minutes, a 10% price increase is applied

A background timer resets the price after 10 minutes

Ensures realistic surge pricing simulation

📄 PDF Ticket Details

Generated tickets contain:

Unique PNR

Passenger name

Flight & airline details

Route information

Final amount paid

Booking timestamp

Tickets are stored in:

server/tickets/
