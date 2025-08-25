import { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import AdminNavbar from '../components/AdminNavbar'

const EditTurf = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      title: '',
      location: '',
      price: '',
      description: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Turf title is required'),
      location: Yup.string().required('Location is required'),
      price: Yup.number()
        .required('Price is required')
        .min(0, 'Price cannot be negative'),
      description: Yup.string().required('Description is required'),
    }),
    onSubmit: async (values) => {
      try {
        await axios.put(`http://localhost:5000/turfs/${id}`, values)
        alert('Turf updated successfully!')
        navigate('/turfs')
      } catch (error) {
        alert('Something went wrong while updating the turf!')
      }
    },
  })

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/turfs/${id}`)
        .then((res) => {
          formik.setValues({
            title: res.data.title || '',
            location: res.data.location || '',
            price: res.data.price || '',
            description: res.data.description || '',
          })
        })
        .catch(() => alert('Failed to load turf details'))
    }
  }, [id])

  return (
    <>
      <AdminNavbar />
      <div className="container mt-4" style={{ maxWidth: '600px' }}>
        <h3>Edit Turf</h3>
        <form onSubmit={formik.handleSubmit} className="card p-3 shadow-sm">
          <div className="mb-3">
            <label>Turf Title</label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.title && formik.errors.title ? 'is-invalid' : ''
              }`}
              {...formik.getFieldProps('title')}
            />
            {formik.touched.title && formik.errors.title && (
              <div className="invalid-feedback">{formik.errors.title}</div>
            )}
          </div>

          <div className="mb-3">
            <label>Location</label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.location && formik.errors.location
                  ? 'is-invalid'
                  : ''
              }`}
              {...formik.getFieldProps('location')}
            />
            {formik.touched.location && formik.errors.location && (
              <div className="invalid-feedback">{formik.errors.location}</div>
            )}
          </div>

          <div className="mb-3">
            <label>Price (per hour)</label>
            <input
              type="number"
              className={`form-control ${
                formik.touched.price && formik.errors.price ? 'is-invalid' : ''
              }`}
              {...formik.getFieldProps('price')}
            />
            {formik.touched.price && formik.errors.price && (
              <div className="invalid-feedback">{formik.errors.price}</div>
            )}
          </div>

          <div className="mb-3">
            <label>Description</label>
            <textarea
              className={`form-control ${
                formik.touched.description && formik.errors.description
                  ? 'is-invalid'
                  : ''
              }`}
              {...formik.getFieldProps('description')}
            />
            {formik.touched.description && formik.errors.description && (
              <div className="invalid-feedback">{formik.errors.description}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Update Turf
          </button>
        </form>
      </div>
    </>
  )
}

export default EditTurf
