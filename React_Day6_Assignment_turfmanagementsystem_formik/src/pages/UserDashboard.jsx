import { useNavigate } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';

const UserDashboard = () => {
  const navigate = useNavigate()

  const goToTurfs = () => {
    navigate('/turfs')
  }
  return (
    <>
      <UserNavbar />
      <div className="container mt-4 text-center">
        <h2>Welcome to User Dashboard</h2>
        <p>Browse available turfs, add them to your cart, and complete your booking.</p>
        <button className="btn btn-primary mt-3" onClick={goToTurfs}>
          Go to Turfs
        </button>
      </div>
    </>
  );
};

export default UserDashboard;
