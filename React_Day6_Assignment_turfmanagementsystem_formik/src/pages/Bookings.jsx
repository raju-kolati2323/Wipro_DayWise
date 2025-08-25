import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../components/AdminNavbar';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const res = await axios.get('http://localhost:5000/bookings');
      setBookings(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch bookings', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading) return <div className="container mt-4">Loading...</div>;

  return (
    <>
      <AdminNavbar />
      <div className="container mt-4">
        <h3>All Bookings</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>User (Id)</th>
              <th>Turf (Id)</th>
              <th>Date</th>
              <th>Time Slot</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.userName} ({booking.userId})</td>
                  <td>{booking.turfName} ({booking.turfId})</td>
                  <td>{booking.date}</td>
                  <td>{booking.timeSlot}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Bookings;
