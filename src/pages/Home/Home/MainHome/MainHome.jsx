/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import image1 from '../../../../assets/1.jpg';
import image2 from '../../../../assets/2.jpg';
import image3 from '../../../../assets/3.jpg';
import image4 from '../../../../assets/4.jpg';

const MainHome = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={image1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div>
                            <h5 className='text-teal-300 text-2xl font-bold flex text-center items-center'>Cook's C@rner</h5>
                            <p className='text-sky-400'>Welcome to my food website! <br /> Here you will find a variety of delicious <br /> and easy-to-follow recipes.</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div>
                            <h5 className='text-teal-300 text-2xl font-bold flex text-center items-center'>Cook's Corner</h5>
                            <p className='text-sky-400'>Welcome to my food website! <br /> Here you will find a variety of delicious <br /> and easy-to-follow recipes.</p>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div>
                            <h5 className='text-teal-300 text-2xl font-bold flex text-center items-center'>Cook's Corner</h5>
                            <p className='text-sky-400'>Welcome to my food website! <br /> Here you will find a variety of delicious <br /> and easy-to-follow recipes.</p>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>

                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={image4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div>
                            <h5 className='text-teal-300 text-2xl font-bold flex text-center items-center'>Cook's Corner</h5>
                            <p className='text-sky-400'>Welcome to my food website! <br /> Here you will find a variety of delicious <br /> and easy-to-follow recipes.</p>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHome;