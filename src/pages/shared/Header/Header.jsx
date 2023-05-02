/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 items-center'>
            <div className="navbar justify-between">
                <div className="navbar-start">

                    <Link to='/' className=" text-lg font-bold">Cook's Corner</Link>
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
                <div>
                <div>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                </div>
                <div className="">
                    <Link className="btn">Login</Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Header;