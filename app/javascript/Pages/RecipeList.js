import React from "react";
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
// RecipeList.layout = null;
// or
// RecipeList.layout = (page) => <Layout>{page}</Layout>;

export default RecipeList;
