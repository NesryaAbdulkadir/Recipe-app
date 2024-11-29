import { SearchCheckIcon, SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

export default function Search({ recipes, setRecipes }) {
  const [value, setValue] = useState("");
  const [meal, setMeal] = useState("");
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
  const meals = useFetch(url);
  useEffect(() => {
    const structuredMeals = meals.map((meal) => ({
      id: meal.idMeal,
      meal: meal.strMeal,
      ingredients: [
        { ingredient: meal.strIngredient1, measurement: meal.strMeasure1 },
        { ingredient: meal.strIngredient2, measurement: meal.strMeasure2 },
        { ingredient: meal.strIngredient3, measurement: meal.strMeasure3 },
        { ingredient: meal.strIngredient4, measurement: meal.strMeasure4 },
        { ingredient: meal.strIngredient5, measurement: meal.strMeasure5 },
        { ingredient: meal.strIngredient6, measurement: meal.strMeasure6 },
        { ingredient: meal.strIngredient7, measurement: meal.strMeasure7 },
        { ingredient: meal.strIngredient8, measurement: meal.strMeasure8 },
        { ingredient: meal.strIngredient9, measurement: meal.strMeasure9 },
      ],
      category: meal.strCategory,
      instructions: meal.strInstructions,
      tags: meal.strTags?.split(","),
      image: meal.strMealThumb,
      youtube: meal.strYoutube,
    }));
    console.log(meal);

    setRecipes(structuredMeals);
  }, [meal, setMeal, meals, setRecipes]);

  return (
    <div className="flex items-center justify-center w-full gap-3 p-4">
      <input
        className="bg-gray-50 p-2 rounded-xl border-none outline-none "
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setMeal(value)}>
        <SearchIcon />
      </button>
    </div>
  );
}
