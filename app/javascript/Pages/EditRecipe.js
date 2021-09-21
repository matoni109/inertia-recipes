import React from "react";

import FormEdit from "~/Components/FormEdit";
import { Inertia } from "@inertiajs/inertia";

const EditRecipe = ({ recipe }) => {
  const saveRecipeHandler = (enteredRecipeData) => {
    // expenseData object gets passed as an args to props going UP to parent
    // console.log(enteredRecipeData);
    const recipeData = {
      ...enteredRecipeData,
    };
    // console.log(recipeData["name"]);
    // console.log(userData);
    // execute the fuction from the props up to theparent !!
    // onAddExpese from App.JS
    // props.onAddUser(userData);
    Inertia.patch(`/recipes/${recipe.id}`, enteredRecipeData);
  };

  return (
    <>
      <h1>Edit Recipe</h1>
      <FormEdit onSaveRecipeData={saveRecipeHandler} editProps={recipe} />
    </>
  );
};

export default EditRecipe;
