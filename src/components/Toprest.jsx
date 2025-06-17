import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";

function TopRest() {
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    try {
      const res = await fetch(
        "https://raw.githubusercontent.com/mahesxrathod/my-json-data/main/restaurantChains.json"
      );
      const apiData = await res.json();
      setData(apiData);
      console.log(apiData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-2">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">
          Top restaurant chains in Surat
        </div>
        <div className="flex">
          <div
            className="flex justify-center
                         items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
          >
            <FaArrowLeft />
          </div>
          <div
            className="flex justify-center
                         items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden gap-5">
       {
        data.map(
          (d,i) => {
            return <Card width="w-full md:w-[273px]" {...d} key={i} />
          }
        )
       }
      </div>
      <hr className="my-4 border-[1px]" />
    </div>
  );
}

export default TopRest;
