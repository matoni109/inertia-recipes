import { usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";

const Login = (user) => {
  const { errors } = usePage().props;

  const [values, setValues] = useState({
    name: "",
    description: "",
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
    console.log(recipeData);

    props.onSaveRecipeData(recipeData);
  };
  return (
    <>
      <div>
        <div className="p-6 bg-indigo-800 min-h-screen flex justify-center items-center">
          <div className="w-full max-w-md">
            <span
              className="block mx-auto w-full max-w-xs fill-white"
              height="50"
            />
            <form className="mt-8 bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="px-10 py-12">
                <h1 className="text-center font-bold text-3xl">
                  Welcome Back!
                </h1>
                <div className="mx-auto mt-6 w-24 border-b-2" />
                <input
                  v-model="form.user.email"
                  className="mt-10"
                  label="Email"
                  type="email"
                  autoFocus
                  autoCapitalize="off"
                />
                <input
                  v-model="form.user.password"
                  className="mt-6"
                  label="Password"
                  type="password"
                />
                <label
                  className="mt-6 select-none flex items-center"
                  htmlFor="remember"
                >
                  <input
                    id="remember"
                    v-model="form.user.remember_me"
                    className="mr-1"
                    type="checkbox"
                  />
                  <span className="text-sm">Remember Me</span>
                </label>
              </div>
              <div className="px-10 py-4 bg-gray-100 border-t border-gray-200 flex justify-between items-center">
                <a
                  className="hover:underline"
                  tabIndex="-1"
                  href="#reset-password"
                >
                  Forgot password?
                </a>
                <button className="btn-indigo" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

Login.layout = null;
export default Login;
