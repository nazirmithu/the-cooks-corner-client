/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header>
            <Outlet></Outlet>
            <Footer></Footer>
            </Header>
        </div>
    );
};

export default Main;