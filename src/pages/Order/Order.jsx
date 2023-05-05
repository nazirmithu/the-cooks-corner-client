/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import Marquee from "react-fast-marquee";
import image1 from '../../assets/pic-1.jpg';
import image2 from '../../assets/pic-2.jpg';
import image3 from '../../assets/pic-3.png';
import image4 from '../../assets/Desserts.jpg';
import image5 from '../../assets/drinks.jpg';
import image6 from '../../assets/Bread.jpg';
import image7 from '../../assets/salad.jpg';
import image8 from '../../assets/pic-4.jpg';

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
                        <img className='w-96 h-96' src={image8} alt="Burger" />
                    </div>
                </div>
            </div>
            <div className='bg-purple-100'>
                <h1 className='text-3xl font-bold my-12 text-center mt-20'>Browse By Categories</h1>
                <div className='flex gap-4 max-w-screen-lg mx-auto'>
                    <div className='text-center'>
                        <div className="avatar ">
                            <div className="w-64 mask mask-squircle">
                                <img src={image4} />
                            </div>
                        </div>
                        <p className='text-xl font-bold'>Desserts</p>
                    </div>
                    <div className='text-center'>
                        <div className="avatar ">
                            <div className="w-64 mask mask-squircle">
                                <img src={image5} />
                            </div>
                        </div>
                        <p className='text-xl font-bold'>Drinks</p>
                    </div>
                    <div className='text-center'>
                        <div className="avatar ">
                            <div className="w-64 mask mask-squircle">
                                <img src={image6} />
                            </div>
                        </div>
                        <p className='text-xl font-bold'>Bread</p>
                    </div>
                    <div className='text-center'>
                        <div className="avatar ">
                            <div className="w-64 mask mask-squircle">
                                <img src={image7} />
                            </div>
                        </div>
                        <p className='text-xl font-bold'>salad</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;