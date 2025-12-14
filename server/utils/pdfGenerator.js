const PDFDocument = require("pdfkit");
const fs = require("fs");

module.exports = (b) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(`tickets/${b.pnr}.pdf`));
  doc.text(`PNR: ${b.pnr}`);
  doc.text(`Passenger: ${b.passenger_name}`);
  doc.text(`Flight: ${b.airline} (${b.flight_id})`);
  doc.text(`Route: ${b.route}`);
  doc.text(`Price: ₹${b.price_paid}`);
  doc.text(`Date: ${b.booked_at}`);
  doc.end();
};
