/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Details = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allData")
            .then(res => res.json())
            .then(data => setServicesData(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="max-w-screen-lg mx-auto">
            <h2 className='text-4xl text-center font-bold mt-8 mb-8'>Chef Details</h2>

            <div className="grid grid-cols-2 gap-8">
            {
                servicesData?.map(services => <Card
                    key={services.id}
                    services={services}
                ></Card>)
            }
            </div>
        </div>
    );
};

export default Details;