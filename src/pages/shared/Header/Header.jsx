/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = ({ children }) => {
    const { user, loading, handleSignOut } = useContext(AuthContext);   
    if(loading){
        return <progress className="progress w-56"></progress>
    }
          
    const handleLogOut = () => {
        handleSignOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 text-2xl font-bold">Cook's Corner</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* <!-- Navbar menu content here --> */}
                                <li>
                                    <NavLink to="/">Home</NavLink>

                                </li>
                                <li>
                                    <NavLink to="/blog">Blog</NavLink>
                                </li>
                                {
                                    user ? <li>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                            <li>
                                                <a className="justify-between">
                                                    {
                                                        user?.displayName
                                                    },
                                                    {
                                                        user?.photoURL

                                                    }
                                                    
                                                </a>
                                            </li>

                                            <li><button onClick={handleLogOut}>Logout</button></li>
                                        </ul>
                                    </div>
                                </li> 
                                : 
                                    <li><NavLink to="/login"><button className='btn btn-primary'>Login</button></NavLink></li>
                                }

                            </ul>

                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>


                    </ul>

                </div>
            </div>
        </>
    );
};

export default Header;