import React, { useEffect, useState } from 'react';
import Card from './Card';

function OnlineDelivery() {
    const [data, setData] = useState([]);
    
    const fetchTopRestaurant = async () => {
        try {
            const res = await fetch(
                "https://raw.githubusercontent.com/mahesxrathod/my-json-data/main/restaurantChains.json"
            );
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const apiData = await res.json();
            setData(apiData);
            console.log(apiData);
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };
    
    useEffect(() => {
        fetchTopRestaurant();
    }, []);
    
    return (
        <div className="max-w-[1200px] mx-auto px-2">
            <div className="flex my-3 items-center justify-between">
                <div className="text-[25px] font-bold">
                    Restaurants with online food delivery in Surat
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {
                    data.map(
                        (d, i) => {
                             return <Card {...d} />
                        }
                    )
                }
            </div>
        </div>
    );
}

export default OnlineDelivery;
