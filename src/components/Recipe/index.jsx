import React, { useMemo, useState } from "react";
import Search from "../Search";
import AllRecipies from "../AllRecipies";
import Pagination from "../Pagination";

export default function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  // const currentRecipeData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return recipes.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  const indexOfLastRecipe = currentPage * postPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - postPerPage;
  const currentPost = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Search recipes={currentPost} setRecipes={setRecipes} />
      <AllRecipies recipes={currentPost} setRecipes={setRecipes} />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={recipes.length}
        paginate={paginate}
      />
    </div>
  );
}
