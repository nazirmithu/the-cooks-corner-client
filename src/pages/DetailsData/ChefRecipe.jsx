/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line react/prop-types
const ChefRecipe = ({ recipe, favoriteButton }) => {
    // eslint-disable-next-line react/prop-types
    const { name, recipe_url, ingredients, cooking_method } = recipe;

 

    return (
        <div className='card card-compact  bg-purple-50 shadow-xl'>
            <h1 className='text-center font-bold p-4'>{name}</h1>
            <img src={recipe_url} alt="" />
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center'>
                            <th>Name</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            ingredients.slice(5).map((items, index) => <tr>
                                <td>{items.name}</td>
                                <td>{items.quantity}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div>
                 <p className='text-center font-bold p-4'>Cooking Method</p>
                {
                    cooking_method.map(method=><p className='p-4 text-center'>
                        {method}
                    </p>)
                }
            <button onClick={favoriteButton} className='btn bg-purple-900'>Favorite button</button>
            </div>
        </div>
    );
};

export default ChefRecipe;