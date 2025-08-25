import * as Yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: { name: '', email: '', password: '', role: 'user' },
        validationSchema: Yup.object({
            name: Yup.string().min(3, "At-lease 3 characters").required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().min(6, "At-lease 6 characters").required("Password is required"),
        }),
        onSubmit: async(values) => {
            await axios.post('http://localhost:5000/users', values)
            alert("Registration success! ")
            navigate('/login')
        }
    })
    return (
        <div className='container mt-4'>
            <h3>Registration</h3>
            <form onSubmit={formik.handleSubmit} className='card p-3 shadow-sm'>
                <div className='mb-3'>
                    <label>Name</label>
                    <input type="text"
                        className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                        {...formik.getFieldProps('name')} />
                    {formik.touched.name && formik.errors.name && (
                        <div className='invalid-feedback'>
                            {formik.errors.name}
                        </div>
                    )}
                </div>
                <div className='mb-3'>
                    <label>Email</label>
                    <input type="email"
                        className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                        {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email && (
                        <div className='invalid-feedback'>
                            {formik.errors.email}
                        </div>
                    )}
                </div>
                <div className='mb-3'>
                    <label>Password</label>
                    <input type="password"
                        className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                        {...formik.getFieldProps('password')} />
                    {formik.touched.password && formik.errors.password && (
                        <div className='invalid-feedback'>
                            {formik.errors.password}
                        </div>
                    )}
                </div>
                <button type='submit' className='btn btn-primary w-100'>Register</button>
            </form>
        </div>
    )
}

export default Register