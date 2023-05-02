/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <div className="navbar grid md:grid-cols-2 lg:grid-cols-3 items-center  bg-purple-50 pl-32">
                <div className="navbar-start">

                    <Link to='/' className=" text-3xl font-bold">Cook's Corner</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <NavLink className="gap-4 menu menu-horizontal px-1">
                        <NavLink to='/'
                            title='Home'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >Home</NavLink>

                        <NavLink to='/blog'
                            title='Blog' className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >Blog</NavLink>
                    </NavLink>
                </div>
                <div className="ml-32">
                    <Link className="btn btn-primary">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;