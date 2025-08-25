import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddTurf = () => {
  const navigate = useNavigate()
  const [turf, setTurf] = useState({
    title: '',
    description: '',
    location: '',
    price: '',
  })

  const handleChange = e => {
    setTurf({ ...turf, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/turfs', turf)
      alert('Turf added successfully!')
      setTurf({ title: '', description: '', location: '', price: '' })
      navigate('/turfs')
    } catch (error) {
      console.error('Error adding turf:', error)
      alert('Failed to add turf. Please try again.')
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <div className="card shadow p-4">
        <h3 className="mb-4">Add New Turf</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Turf Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={turf.title}
              onChange={handleChange}
              placeholder="Enter turf title"
              required
            />
          </div>
          <div className="mb-3">
            <label>Turf Description</label>
            <textarea
              className="form-control"
              name="description"
              value={turf.description}
              onChange={handleChange}
              placeholder="Enter turf description"
              required
            />
          </div>
          <div className="mb-3">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={turf.location}
              onChange={handleChange}
              placeholder="Enter turf location"
              required
            />
          </div>
          <div className="mb-3">
            <label>Price (per hour)</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={turf.price}
              onChange={handleChange}
              placeholder="Enter price"
              min="0"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Turf
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddTurf
