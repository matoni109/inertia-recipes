import React from "react";
//codepen.io/sturner/pen/rNyEjPp
// https://daisyui.com/docs/install
import { InertiaLink } from "@inertiajs/inertia-react";

const RecipeList = ({ user, recipes }) => (
  <>
    <h1>{user.name}'s Recipes</h1>
    {recipes.map((recipe) => (
      <div key={recipe.id}>
        <InertiaLink className="hover:underline" href={`/recipes/${recipe.id}`}>
          {recipe.name}
        </InertiaLink>
      </div>
    ))}
  </>
);
// <InertiaLink as="div" className="hover:underline" href={`/recipes/${recipe.id}`}>
// you can change the layouts per page like below
// RecipeList.layout = null;
// or
// RecipeList.layout = (page) => <Layout>{page}</Layout>;

export default RecipeList;
