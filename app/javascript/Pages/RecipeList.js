import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
//codepen.io/sturner/pen/rNyEjPp
// https://daisyui.com/docs/install

import Card from "../Components/Card";
const RecipeList = ({ recipes, data, favList }) => {
  const { url } = usePage();
  const currentPage = url;
  console.log(favList);
  // const recipeIsFavourite = (favList) => {
  //   return favList.includes(2);
  // };
  const favoriteSection = () => {
    return (
      <>
        <h1>You have {favList.length} Favorite Recipes</h1>
        <ul className="list-disc">
          <li>Add some Favorites to get more</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li>
            <span className="bg-gray-500 text-white"></span>
          </li>
        </ul>
      </>
    );
  };

  return (
    <>
      {/* <Header /> */}
      <div className="mt-5 p-10 mx-auto bg-white max-w-lg shadow-lg  mx-auto border-1 rounded overflow-hidden  ">
        {currentPage === "/recipe/favorites" && favoriteSection()}

        {currentPage != "/recipe/favorites" && (
          <>
            <h1>{data.user.name}'s Recipes</h1>
            <ul className="list-disc">
              <li>React Components</li>
              <li>Responisve Cards</li>
              <li>Tailwind 2.0 CSS</li>
              <li>Basic C R U D for Recipes</li>
              <li>Uses recipescontroller.rb</li>
              <li>
                Tests with FactoryBot and RSpec in /spec run with{" "}
                <span className="bg-gray-500 text-white"> rspec </span>
              </li>
            </ul>
          </>
        )}
      </div>

      <div className="p-5 grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {recipes.map((recipe) => (
          <Card
            props={recipe}
            key={recipe.id}
            isFave={favList.includes(Number(recipe.id))}
          />
        ))}
      </div>
    </>
  );
};
// <InertiaLink as="div" classNameName="hover:underline" href={`/recipes/${recipe.id}`}>
// you can change the layouts per page like below
// RecipeList.layout = null;
// or
// RecipeList.layout = (page) => <Layout>{page}</Layout>;

export default RecipeList;
