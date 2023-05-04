/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../Home/Card/Card';
import ChefRecipe from '../DetailsData/ChefRecipe';
import toast, { Toaster } from 'react-hot-toast';

const AllDetailsData = () => {
    const allServices = useLoaderData();
    // console.log(allServices)
    const { img_url, name, bio, likes, num_recipes, years_of_experience,  rating, recipe} = allServices;
    
    const favoriteButton = ()=>{
        toast.success('Successfully created!');
        <Toaster/>
    }

    return (
        <section className='p-20 '>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img_url} className="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{bio}</p>
                        <p>Number of Recipe: {num_recipes}</p>
                        <p>Years of Experience: {years_of_experience}</p>
                        <p>Total Likes: {likes}</p>
                    </div>
                </div>
            </div>
            <h2>Chef Recipes Page</h2>
            <div className='grid grid-cols-2 gap-8 pt-20'>
                {
                    recipe.map((item,index)=> <ChefRecipe
                    key={index}
                    recipe={item}
                    favoriteButton={favoriteButton}
                    > 

                    </ChefRecipe>)
                }
            </div>

        </section>
    );
};

export default AllDetailsData;