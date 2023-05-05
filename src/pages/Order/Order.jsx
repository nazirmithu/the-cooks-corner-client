/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import Marquee from "react-fast-marquee";
import image1 from '../../assets/pic-1.jpg';
import image2 from '../../assets/pic-2.jpg';
import image3 from '../../assets/pic-3.png';

const Order = () => {
    return (
        <div className='my-20'>
            <div className='p-4 mb-10 text-2xl font-bold bg-green-700 text-white'>
                <Marquee>
                    * WELCOME TO COOK'S CORNER * WE LOVE FOOD * WE PROVIDE HEALTHY AND DELICIOUS FOOD *
                </Marquee>
            </div>
            <div>
                <div className="carousel rounded-box max-w-screen-lg mx-auto">
                    <div className="carousel-item">
                        <img className='w-96 h-96' src={image1} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='w-96 h-96' src={image2} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='w-96 h-96' src={image3} alt="Burger" />
                    </div>                    
                </div>
            </div>
        </div>
    );
};

export default Order;