/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Details = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch("https://the-cooks-corner-server.vercel.app/allData")
            .then(res => res.json())
            .then(data => setServicesData(data))
            .catch(error => error.message)
    }, [])
    return (
        
        <div className="max-w-screen-lg mx-auto">
            <h2 className='text-3xl text-center font-bold mt-10 mb-10'>Chef Details</h2>

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