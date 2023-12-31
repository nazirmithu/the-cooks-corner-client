/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Card = ({ services }) => {
    const { id, img_url, name, years_of_experience, num_recipes, likes } = services;
    return (

        <div className=" card shadow-xl">
            
            <LazyLoad>
                <img className='h-96 w-full' src={img_url} alt="" />
            </LazyLoad>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Years of Experience: {years_of_experience}</p>
                <p>Numbers of Recipes: {num_recipes}</p>
                <p>Likes: {likes}</p>
                <div className="card-actions justify-end">
                    <Link to={`/recipe/${id}`}><button className="btn btn-primary">View Recipes</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Card;