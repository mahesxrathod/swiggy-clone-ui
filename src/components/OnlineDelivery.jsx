import React, { useEffect, useState } from 'react';

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
        <div className="max-w-[1200px] mx-auto mb-[50px]">
            <div className="flex my-3 items-center justify-between">
                <div className="text-[25px] font-bold">
                    Restaurants with online food delivery in Surat
                </div>
            </div>
        </div>
    );
}

export default OnlineDelivery;
