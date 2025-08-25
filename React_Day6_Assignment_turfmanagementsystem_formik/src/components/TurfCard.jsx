import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import UserNavbar from './UserNavbar'
import AdminNavbar from './AdminNavbar'

const TurfCard = () => {
  const [turfs, setTurfs] = useState([])
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem('user'))

  const fetchTurfs = () => {
    axios
      .get('http://localhost:5000/turfs')
      .then(res => setTurfs(res.data))
      .catch(err => alert(err))
  }

  useEffect(() => {
    fetchTurfs()
  }, [])

  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this turf?')) {
      axios
        .delete(`http://localhost:5000/turfs/${id}`)
        .then(() => {
          fetchTurfs()
          alert('Turf deleted successfully!')
        })
        .catch(err => alert(err))
    }
  }

  const handleEdit = id => {
    navigate(`/edit/${id}`)
  }

  const handleAddToCart = async turf => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || []

    if (existingCart.find(item => item.id === turf.id)) {
      alert('Turf already in cart!')
      return
    }

    const date = prompt('Enter booking date (YYYY-MM-DD):')
    const timeSlot = prompt('Enter time slot (e.g., 10am-11am):')

    if (!date || !timeSlot) {
      alert('Date and time slot are required.')
      return
    }

    const turfWithBooking = {
      ...turf,
      date,
      timeSlot,
      userId: user?.id,
      userName: user?.name
    }

    try {
      await axios.post('http://localhost:5000/cart', turfWithBooking)

      const updatedCart = [...existingCart, turfWithBooking]
      localStorage.setItem('cart', JSON.stringify(updatedCart))

      alert('Turf added to cart!')
    } catch (error) {
      console.error('Error adding to cart:', error)
      alert('Failed to add to cart.')
    }
  }

  return (
    <>
      {user?.role === 'user' ? <UserNavbar /> : <AdminNavbar />}
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Turfs</h1>
          {user?.role === 'user' && (
            <button className="btn btn-outline-success me-2" onClick={() => navigate('/cart')}>
              Cart
            </button>
          )}
          {user?.role === 'admin' && (
            <button className="btn btn-primary" onClick={() => navigate('/addTurf')}>
              Add Turf
            </button>
          )}
        </div>

        <div className="row">
          {turfs.length === 0 && <p>No turfs found.</p>}

          {turfs.map(turf => (
            <div key={turf.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{turf.title}</h5>
                  <p className="card-text">{turf.description}</p>
                  <p className="card-text">
                    <b>Price: </b>₹{turf.price} (per hour)
                  </p>
                  <p className="card-text">
                    <b>Location: </b>{turf.location}
                  </p>

                  {user?.role === 'admin' ? (
                    <>
                      <button onClick={() => handleEdit(turf.id)} className="btn btn-primary me-2">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(turf.id)} className="btn btn-danger">
                        Delete
                      </button>
                    </>
                  ) : user?.role === 'user' ? (
                    <button className="btn btn-success" onClick={() => handleAddToCart(turf)}>
                      Add to Cart
                    </button>
                  ) : (
                    <p>Please login to see options.</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TurfCard
