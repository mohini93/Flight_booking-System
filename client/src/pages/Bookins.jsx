import api from "../services/api";

export default function Bookings() {
  const [b, setB] = React.useState([]);
  React.useEffect(() => {
    api.get("/bookings").then(res => setB(res.data));
  }, []);
  return b.map(x => <div key={x.pnr}>{x.pnr} ₹{x.price_paid}</div>);
}
