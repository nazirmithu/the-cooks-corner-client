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
        <div>
            <h2 className='text-center font-bold mt-8 mb-8'>Chef Details</h2>

            {
                servicesData?.map(services => <Card
                    key={services.id}
                    services={services}
                ></Card>)
            }
        </div>
    );
};

export default Details;