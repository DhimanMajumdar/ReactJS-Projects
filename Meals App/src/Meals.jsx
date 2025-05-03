import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        //console.log(res.data.meals);
        setItems(res.data.meals);
      });
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section
        key={idMeal}
        className="bg-amber-300 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
      >
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-full h-48 object-cover"
        />
        <section className="p-4">
          <p className="text-xl font-semibold mb-2">{strMeal}</p>
          <p className="text-sm text-gray-500">#{idMeal}</p>
        </section>
      </section>
    );
  });

  return (
    <div className=" grid grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">
      {itemsList}
    </div>
  );
};

export default Meals;
