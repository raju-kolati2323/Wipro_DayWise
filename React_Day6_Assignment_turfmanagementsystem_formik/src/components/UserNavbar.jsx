import { Link, useNavigate } from 'react-router-dom'

const UserNavbar = () => {
    
    const navigate = useNavigate();

    const handleLogout = () =>{
        localStorage.removeItem('user')
        navigate('/')
    }
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container-fluid'>
            <Link className='navbar-brand fw-bold' to='/'>
                Turf Management System
            </Link>
            <button className='navbar-toggle' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle Navigation'>
                <span className='navbar-toggle-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-link'>
                        <Link className='nav-link' to='/turfs'>Browse Turfs</Link>
                    </li>
                    <li className='nav-link'>
                        <Link className='nav-link' to='/cart'>Cart</Link>
                    </li>
                    <li className='nav-link'>
                        <Link className='nav-link' to='/checkout'>Checkout</Link>
                    </li>
                    <li className='nav-link'>
                        <button className='btn btn-outline-light ms-2' onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default UserNavbar