import React from 'react'
import {useNavigate} from 'react-router-dom'

const Welcome = () => {
    const navigate = useNavigate()

  return (
    <div className='container vh-100 d-flex justify-content-center align-items-center'>
        <div className='text-center p-5 rounded shadow' style={{maxWidth:'1200px'}}>
        <h2 className='mb-4'>Welcome to Turf Management System</h2>
        <div>
            <button className='btn btn-primary me-3' onClick={()=>navigate('/login')}>
                Login
            </button>
            <button className='btn btn-success' onClick={()=>navigate('/register')}>
                Register
            </button>
        </div>
        </div>
    </div>
  )
}


export default Welcome