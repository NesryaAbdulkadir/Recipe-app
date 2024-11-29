import React, { useState } from "react";
import Search from "../Search";
import AllRecipies from "../AllRecipies";

export default function Recipe() {
  const [recipes, setRecipes] = useState([]);
  return (
    <div>
      <Search recipes={recipes} setRecipes={setRecipes} />
      <AllRecipies recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}
