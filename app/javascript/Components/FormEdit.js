import { usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";

const FormEdit = (props) => {
  const { errors } = usePage().props;
  console.log(errors);
  // if (errors) {
  //   console.log(errors);
  //   // console.log(errors.name[0]);
  // }

  // const formErrorsHandler = (errorId) => {
  //   console.log(errorId);

  //   if (errors.name) {
  //     return (
  //       <>
  //         <h6>Im a sucky error </h6>
  //       </>
  //     );
  //   }
  // };

  const [values, setValues] = useState({
    name: props.editProps.name,
    description: props.editProps.description,
  });

  const valuesChangedHandler = (event) => {
    console.log("state ran");
    setValues((values) => ({
      ...values,
      [event.target.id]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // const enteredUserName = name;
    // const enteredUserAge = description;
    // userData object gets passed as an args to props going UP to parent
    const recipeData = {
      name: values.name,
      description: values.description,
    };
    // console.log(recipeData);
    // if (userData.age > 0 && userData.title !== "") {
    // if (
    //   enteredUserName.trim().length === 0 ||
    //   enteredUserAge.trim().length === 0
    // ) {
    //   setError({
    //     title: "invalid input",
    //     message: "please enter a valid name and age ( non-emply values).",
    //   });
    //   return;
    // }
    // if (+enteredUserAge < 1) {
    //   setError({
    //     title: "invalid age",
    //     message: "please enter a valid  age ( > 0 ).",
    //   });
    //   return;
    // }

    // user is NOT empty
    props.onSaveRecipeData(recipeData);
    // setEnteredTitle("");
    // setAge("");
    // setValues({
    //   name: "",
    //   description: "",
    // });
  };
  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6 px-4">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h2 className="h2 text-lg font-medium leading-6 text-gray-900">
                Description
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          onChange={valuesChangedHandler}
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="Recipe Name"
                          value={values.name}
                        />
                        {errors && errors.name && <div>{errors.name}</div>}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Description"
                        value={values.description}
                        onChange={valuesChangedHandler}
                      />
                      {errors && errors.description && (
                        <div>{errors.description}</div>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description. URLs are hyperlinked.
                    </p>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    onClick={submitHandler}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Edit Recipe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default FormEdit;
