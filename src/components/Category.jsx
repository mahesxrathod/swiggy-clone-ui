import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Category() {
  const datas = [
    {
      image: "./images/North_Indian_4.jpeg",
      path: "north-indian",
    },
    {
      image: "./images/Pizza.jpeg",
      path: "pizza",
    },
    {
      image: "./images/Noodles.jpeg",
      path: "noodles",
    },
    {
      image: "./images/Pasta.jpeg",
      path: "pasta",
    },
    {
      image: "./images/Paratha.jpeg",
      path: "paratha",
    },
    {
      image: "./images/Biryani_2.jpeg",
      path: "biryani",
    },
    {
      image: "./images/Burger.jpeg",
      path: "burger",
    },
    {
      image: "./images/Cakes.jpeg",
      path: "cakes",
    },
    {
      image: "./images/Chinese.jpeg",
      path: "chinese",
    },
    {
      image: "./images/Chole_Bature.jpeg",
      path: "chole-bature",
    },
    {
      image: "./images/Dosa.jpeg",
      path: "dost",
    },
    {
      image: "./images/Gulab_Jamun.jpeg",
      path: "gulab-jamun",
    },
    {
      image: "./images/Ice_Creams.jpeg",
      path: "ice-creams",
    },
    {
      image: "./images/Idli.jpeg",
      path: "idli",
    },
    {
      image: "./images/Khichdi.jpeg",
      path: "khichdi",
    },
    {
      image: "./images/Poori.jpeg",
      path: "poori",
    },
    {
      image: "./images/Pure_Veg.jpeg",
      path: "pure-veg",
    },
    {
      image: "./images/Rolls.jpeg",
      path: "rolls",
    },
    {
      image: "./images/Salad.jpeg",
      path: "salad",
    },
    {
      image: "./images/South_Indian_4.jpeg",
      path: "south-indian",
    },
  ];

  const [slide,setSlider] = useState(0);

  const nextSlide = () => {
    if(datas.length - 8 == slide) return false;
      setSlider(slide + 3)
  }

  const prevSlide = () => {
     setSlider(slide - 3)
     if(slide == 0) return false;
  }
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div
            className="flex justify-center
                 items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
                 onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="flex justify-center
                 items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
                 onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {datas.map((data, index) => {
          return (
            <div style={{
              transform:`translateX(-${slide * 100}%)`
            }} key={index} className="w-[150px] shrink-0 duration-500">
              <img src={data.image} alt={data.path} />
            </div>
          );
        })}
      </div>
      <hr className=" border-[1px]" />
    </div>
  );
}

export default Category;
