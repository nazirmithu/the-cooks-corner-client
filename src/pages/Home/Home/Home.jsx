/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import MainHome from './MainHome/MainHome';
import Details from '../Details/Details';
import Order from '../../Order/Order';
const Home = () => {
    return (
        <div>
            <MainHome></MainHome>
            <Details></Details>
            <Order></Order>
        </div>
    );
};

export default Home;