import React from "react";

const Recipe = ({ recipe }) => (
  <>
    <h1>{recipe.name}</h1>
    <div>{recipe.description}</div>
  </>
);

export default Recipe;
