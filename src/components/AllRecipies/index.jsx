import { Youtube } from "lucide-react";
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
export default function AllRecipies({ recipes, setRecipes }) {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=b";
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
    setRecipes(structuredMeals);
  }, [meals, setRecipes]);

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-center mt-5">Recipes to try</h1>
      <ul className=" p-10 flex flex-col gap-5 ">
        {recipes?.map((recipe) => (
          <li
            className=" grid grid-cols-1 lg:grid-cols-2 gap-8"
            key={recipe.id}
          >
            <div className="relative">
              <p className="absolute top-0 left-0 bg-pink-100  px-4 py-2  rounded-b-xl">
                {recipe.catagory}
              </p>
              <img
                src={recipe.image}
                alt={recipe.meal}
                className="h-full w-full object-cover col-span-1"
              />
              {recipe?.youtube && (
                <a
                  href={recipe.youtube}
                  className="absolute bottom-0 left-0 "
                  alt="watch on youtube"
                  target="_blank"
                >
                  <Youtube className="w-12 h-12 text-white bg-red-500 px-2 py-1 rounded-t-full" />
                </a>
              )}
            </div>
            <div className="pt-4 flex flex-col gap-3 col-span-1">
              <h2>{recipe?.meal}</h2>
              <p className="flex flex-wrap gap-2">
                {recipe?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className={`py-2 px-4 rounded-full ${
                      index === 0
                        ? "bg-pink-100"
                        : index === 1
                        ? "bg-blue-100"
                        : index === 2
                        ? "bg-green-100"
                        : index === 3
                        ? "bg-yellow-100"
                        : "bg-gray-100" // Default color for tags beyond the first four
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </p>
              <h2>Ingredients</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-0 ">
                {recipe?.ingredients.map((ingredient, index) => (
                  <div key={index} className=" flex gap-3">
                    <span>{ingredient.measurement}</span>
                    <span>{ingredient.ingredient}</span>
                  </div>
                ))}
              </div>
              <h2>Instructions</h2>
              {recipe?.instructions && (
                <p className="">{recipe?.instructions}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
