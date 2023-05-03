/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AllDetailsData = () => {
   const allServices = useLoaderData();
   console.log(allServices)
    const { img_url, name, bio, likes, num_recipes, years_of_experience } = allServices;

    return (
        <section>
            <h2>Chef Recipes Page</h2>
            <div>
                <h2>{name}</h2> <div>
                
                </div>
            </div>
        </section>
    );
};

export default AllDetailsData;