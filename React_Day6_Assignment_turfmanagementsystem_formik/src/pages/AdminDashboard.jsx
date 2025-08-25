import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'

const AdminDashboard = () => {
  const navigate = useNavigate()

  const goToTurfs = () => {
    navigate('/turfs')
  }

  return (
    <>
      <AdminNavbar />
      <div className="container mt-4 text-center">
        <h2>Welcome to Admin Dashboard</h2>
        <p>Use the navbar to manage turfs and view bookings.</p>
        
        <button className="btn btn-primary mt-3" onClick={goToTurfs}>
          Go to Manage Turfs
        </button>
      </div>
    </>
  )
}

export default AdminDashboard
