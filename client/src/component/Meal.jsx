import React, { useState } from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { categories, mealData } from "../data/Data";
const Meal = () => {
  const [foods, setFoods] = useState(mealData);

  const filterCat = (category) => {
    setFoods(
      mealData.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div className="mx-w-[1520] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Our Meal
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center">
          <button
            onClick={() => setFoods(mealData)}
            className="m-1 bg-orange-700 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            All
          </button>
          <button
            onClick={() => filterCat("pizza")}
            className="m-1  bg-orange-700 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Piza
          </button>
          <button
            onClick={() => filterCat("chicken")}
            className="m-1  bg-orange-700 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Chicken
          </button>
          <button
            onClick={() => filterCat("salad")}
            className="m-1  bg-orange-700 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Sald
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6">
        {foods.map((item) => (
          <div
            key={item.id}
            className="border-none hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover "
            />
            <div className="flex justify-between py-2 px-4">
              <p className="font-bold">{item.name}</p>
              <p className="bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold">
                {item.price}
              </p>
            </div>
            <div className="pl-2 py-4 -mt-7">
              <p className="flex items-center text-indigo-600">
                View More
                <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
