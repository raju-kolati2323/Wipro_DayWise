import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleConfirmBooking = async () => {
    if(cart.length === 0) {
      alert('Cart is empty!');
      return;
    }

    setLoading(true);

    try {
      const bookingsPromises = cart.map(item =>
        fetch('http://localhost:5000/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: user.id,
            userName: user.name,
            turfId: item.id,
            turfName: item.title,
            date: item.date,
            timeSlot: item.timeSlot,
          })
        })
      );

      await Promise.all(bookingsPromises);

      localStorage.removeItem('cart');
      alert('Booking confirmed!');
      navigate('/userDashboard');
    } catch (error) {
      alert('Error confirming booking.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Checkout</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map(item => (
              <li key={item.id} className="list-group-item">
                <strong>{item.name}</strong> - ₹{item.price}
              </li>
            ))}
          </ul>
          <button 
            className="btn btn-success" 
            onClick={handleConfirmBooking}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Confirm Booking'}
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
