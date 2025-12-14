import api from "../services/api";

export default function Search() {
  const book = id =>
    api.post("/bookings", { flightId: id, passenger: "Mohini" });

  const [flights, setFlights] = React.useState([]);
  React.useEffect(() => {
    api.get("/flights").then(res => setFlights(res.data));
  }, []);

  return flights.map(f => (
    <div key={f._id}>
      {f.airline} ₹{f.current_price}
      <button onClick={() => book(f._id)}>Book</button>
    </div>
  ));
}
