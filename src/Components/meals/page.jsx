"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [meals, setMeals] = useState([]);
  console.log(search);
  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      const data = await res.json();
      setMeals(data.meals);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadData();
  }, [search]);
  return (
    <div>
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2"
          type="text"
          name=""
          id=""
          placeholder="Search"
        />
        <button onClick={() => loadData()} className="btn bg-yellow-500  p-2">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {meals.map((meal, idx) => (
          <div className="border-2" key={idx}>
            <Image
              src={meal?.strMealThumb}
              alt={meal?.strMealThumb}
              width={500}
              height={500}
            />
            <h2>{meal.strMeal}</h2>
            <p>{meal.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
