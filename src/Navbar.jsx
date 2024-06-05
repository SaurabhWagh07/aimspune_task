import React from 'react'
import { NavLink } from 'react-router-dom';


const isActive='active';
const Navbar = () => {
    return (
        <>

            <nav className='navbar navbar-expand-lg bg-dark navbar-light'>

                <a href="" className='navbar-brand'><h2 className='text-warning fw-bold'>CRUD APP</h2></a>

                <ul className='navbar-nav m-auto '>
                    <li className='nav-item'><NavLink to="/" className={isActive ? 'text-warning nav-link fw-bold' :'text-light nav-link text-light'}  >Home</NavLink></li>
                    <li className='nav-item'><NavLink to="/UserData" className={isActive ? 'text-warning nav-link fw-bold' :'nav-link text-light mx-4'} >Userlist</NavLink></li>
                </ul>
            </nav>


        </>
    )
}

export default Navbar