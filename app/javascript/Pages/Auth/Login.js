import { usePage, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";

const Login = (user) => {
  const { flash } = usePage().props;
  // console.log(errors);
  // console.log(flash);
  const [values, setValues] = useState({
    email: "alex@democorp.com",
    password: "123456",
    remember: false,
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
                {flash.alert && (
                  <div className=" bg-red-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto ">
                    <svg
                      viewBox="0 0 24 24"
                      className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
                    >
                      <path
                        fill="currentColor"
                        d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
                      ></path>
                    </svg>
                    <span className="text-red-800">{flash.alert}</span>
                  </div>
                )}
                {flash.success && (
                  <div className="bg-blue-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto ">
                    <svg
                      viewBox="0 0 24 24"
                      className="text-blue-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
                    >
                      <path
                        fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
                      ></path>
                    </svg>
                    <span className="text-blue-800">{flash.success}</span>
                  </div>
                )}
                <div className="mx-auto mt-6 w-24 border-b-2" />
                <label htmlFor="text-input-11" className="form-label">
                  Email:
                </label>
                <input
                  className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
                    id="remember"
                    v-model="form.user.remember_me"
                    className="mr-1"
                    type="checkbox"
                    onChange={valuesChangedHandler}
                    value={values.remember}
                    defaultChecked={values.remember}
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
                <button
                  className="btn-indigo"
                  onClick={submitHandler}
                  type="submit"
                >
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
