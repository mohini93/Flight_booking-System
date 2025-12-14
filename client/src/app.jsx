
import Search from "./pages/Search";
import Bookings from "./pages/Bookings";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Flight Booking System</h1>
      <Search />
      <hr />
      <Bookings />
    </div>
  );
}
