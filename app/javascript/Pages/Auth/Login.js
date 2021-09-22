import { usePage, useForm, InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import AlertForm from "~/Components/AlertForm";

const Login = (user) => {
  const { flash } = usePage().props;
  // console.log(errors);
  // console.log(flash);
  const [values, setValues] = useState({
    email: "alex@democorp.com",
    password: "123456",
    remember_me: false,
  });

  const valuesChangedHandler = (event) => {
    console.log("state ran");
    setValues((values) => ({
      ...values,
      [event.target.id]: event.target.value,
    }));
  };
  const checkboxHandler = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.id]: !values.remember_me,
    }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // const enteredUserName = name;
    // const enteredUserAge = description;
    // userData object gets passed as an args to props going UP to parent
    const userData = {
      user: {
        email: values.email,
        password: values.password,
        remember_me: values.remember,
      },
    };
    // console.log(userData);
    Inertia.post("/login", userData);
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
                <AlertForm props={flash} />

                <div className="mx-auto mt-6 w-24 border-b-2" />
                <label htmlFor="text-input-11" className="form-label">
                  Email:
                </label>
                <input
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  label="Email"
                  type="email"
                  autoFocus
                  id="email"
                  autoCapitalize="off"
                  onChange={valuesChangedHandler}
                  value={values.email}
                />
                <div className="mt-6">
                  <label htmlFor="text-input-11" className="form-label">
                    Password:
                  </label>
                  <input
                    className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={valuesChangedHandler}
                    value={values.password}
                  />
                </div>

                <label
                  className="mt-6 select-none flex items-center"
                  htmlFor="remember"
                >
                  <input
                    id="remember_me"
                    v-model="form.user.remember_me"
                    className="mr-1"
                    type="checkbox"
                    onChange={checkboxHandler}
                    value={values.remember_me}
                    defaultChecked={values.remember_me}
                  />
                  <span className="text-sm">Remember Me</span>
                </label>
              </div>
              <div className="flex px-10 py-4 bg-gray-100 border-t border-gray-200 items-center flex-wrap">
                <button
                  className="btn-indigo"
                  onClick={submitHandler}
                  type="submit"
                >
                  Login
                </button>
                {/* <button
                  className="btn-indigo"
                  onClick={submitHandler}
                  type="submit"
                >
                  Login
                </button> */}
                <InertiaLink
                  className="btn-indigo mx-1"
                  as="button"
                  type="submit"
                  href={`/new`}
                >
                  Sign Up
                </InertiaLink>
                <a
                  className="mt-1 mx-1 hover:underline"
                  tabIndex="-1"
                  href="#reset-password"
                >
                  Forgot password?
                </a>
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
