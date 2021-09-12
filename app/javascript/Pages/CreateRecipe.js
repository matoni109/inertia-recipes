import React, { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import Form from "~/Components/Form";
import { Inertia } from "@inertiajs/inertia";

const CreateRecipe = () => {
  const saveRecipeHandler = (enteredRecipeData) => {
    // expenseData object gets passed as an args to props going UP to parent
    console.log(enteredRecipeData);
    const recipeData = {
      ...enteredRecipeData,
    };
    console.log(recipeData["name"]);
    // console.log(userData);
    // execute the fuction from the props up to theparent !!
    // onAddExpese from App.JS
    // props.onAddUser(userData);
    Inertia.post("/recipes", enteredRecipeData);
  };

  return (
    <>
      <h1>Create New Recipe</h1>
      <Form onSaveRecipeData={saveRecipeHandler} />
    </>
  );
};

export default CreateRecipe;
