import React, { useContext } from 'react';
import logo from '../assets/logoHeader.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Firebase/UserContext';

const Header = () => {
    const { user ,handleLogoutUser} = useContext(AuthContext)
    const handleLogout =()=>{
        handleLogoutUser().then(()=>{
            //logout Successfully
        })
        .catch(err => console.error(err))
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/orders'>Orders</Link></li>
                        {
                            user?
                                <li><Link to='/home' onClick={handleLogout}>Logout</Link></li>
                                :
                                <li><Link to='/login'>Login</Link></li>
                        }

                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/orders'>Orders</Link></li>
                    {
                        user?
                            <li><Link to='/home' onClick={handleLogout}>Logout</Link></li>
                            :
                            <li><Link to='/login'>Login</Link></li>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-secondary">Apoinment</button>
            </div>
        </div>
    );
};

export default Header;