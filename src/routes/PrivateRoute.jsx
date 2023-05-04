/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const location = useLocation();


    if (user) {
        return children;
    }

    if (!user) {
        // setLoading(false)
        return <Navigate to="/login" replace state={{ from: location, search: location.search }}></Navigate>;
    }

    // if (loading) {
    //     return "loading..."
    // }
    // return children;



};


export default PrivateRoute;