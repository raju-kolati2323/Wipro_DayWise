import { Route, Routes, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import TurfCard from './components/TurfCard';
import Bookings from './pages/Bookings';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import EditTurf from './pages/EditTurf';
import AddTurf from './pages/AddTurf';

function App() {
const user = JSON.parse(localStorage.getItem('user') || 'null');

  return (
    <>
      <Routes>
        {!user && (
          <Route path='/' element={<Welcome />} />
        )}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {user?.role === 'admin' && (
          <>
            <Route path='/adminDashboard' element={<AdminDashboard />} />
            <Route path='/addTurf' element={<AddTurf />}></Route>
            <Route path='/edit/:id' element={<EditTurf />} />
            <Route path='/viewBookings' element={<Bookings />} />
            <Route path='/turfs' element={<TurfCard />} />
          </>
        )}

        {user?.role === 'user' && (
          <>
            <Route path='/userDashboard' element={<UserDashboard />} />
            <Route path='/turfs' element={<TurfCard />} />
            <Route path='/viewBookings' element={<Bookings />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </>
        )}

        <Route path='*' element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
