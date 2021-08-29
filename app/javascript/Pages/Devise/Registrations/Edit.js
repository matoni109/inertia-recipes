import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import Layout from "../../../Components/Layout";

const Edit = (props) => {
  // const {
  //   props: { user, flash },
  // } = usePage();
  const { data, setData, patch, processing, errors } = useForm({
    user: {
      name: props.user.name,
      email: props.user.email,
      password: "",
      password_confirmation: "",
      current_password: "",
    },
  });
  // [:password, :password_confirmation, :current_password]
  const valuesChangedHandler = (event) => {
    setData((values) => ({
      user: { ...values.user, [event.target.id]: event.target.value },
    }));
  };

  function submit(e) {
    e.preventDefault();
    patch("/edit");
  }

  // needed for form
  //
  //
  //

  return (
    <>
      <div className="p-6 bg-indigo-800 min-h-screen flex justify-center items-center">
        <div className="w-full max-w-md">
          <span
            className="block mx-auto w-full max-w-xs fill-white"
            height="50"
          />
          <form
            className="mt-8 bg-white rounded-lg shadow-xl overflow-hidden"
            onSubmit={submit}
          >
            <div className="px-10 py-12">
              <h1 className="text-center font-bold text-3xl">
                {/* {props.title} */}
                Edit User Registration
              </h1>
              {/* <AlertForm props={flash} /> */}
              <div className="mx-auto mt-6 w-24 border-b-2" />
              <label htmlFor="text-input-11" className="form-label">
                Name:
              </label>
              <input
                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="name"
                value={data.user.name}
                onChange={valuesChangedHandler}
                // onChange={(e) => setData("email", e.target.value)}
              />
              {errors.name && (
                <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>{errors.name}</p>
                </div>
              )}
              {/* Email */}
              <label htmlFor="text-input-11" className="form-label">
                Email:
              </label>
              <input
                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="email"
                value={data.user.email}
                onChange={valuesChangedHandler}
                // onChange={(e) => setData("email", e.target.value)}
              />
              {errors.email && (
                <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>{errors.email}</p>
                </div>
              )}
              {/* User New Password */}
              <label htmlFor="user_password" className="form-label">
                Password:
              </label>
              <i>(leave blank if you don't want to change it)</i>
              <input
                className="shadow appearance-none rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                autoComplete="new-password"
                name="user[password]"
                id="password"
                value={data.password}
                // onChange={(e) => setData("password", e.target.value)}
                onChange={valuesChangedHandler}
              />
              {errors.password && (
                <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>{errors.password}</p>
                </div>
              )}
              {/* User New Password Confirmation */}
              <label
                htmlFor="user_password_confirmation"
                className="form-label"
              >
                Password confirmation:
              </label>
              <input
                className="shadow appearance-none rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                autoComplete="new-password"
                name="user[password_confirmation]"
                id="password_confirmation"
                value={data.password_confirmation}
                // onChange={(e) => setData("password", e.target.value)}
                onChange={valuesChangedHandler}
              />
              {errors.password_confirmation && (
                <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>{errors.password_confirmation}</p>
                </div>
              )}

              {/* User Current Password */}
              <label htmlFor="user_current_password" className="form-label">
                Current Password:
              </label>
              <i>(required to update your profile)</i>
              <input
                className="shadow appearance-none rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                autoComplete="current-password"
                name="user[current_password]"
                id="current_password"
                value={data.current_password}
                // onChange={(e) => setData("password", e.target.value)}
                onChange={valuesChangedHandler}
              />
              {errors.current_password && (
                <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>{errors.current_password}</p>
                </div>
              )}
              <button
                className="btn-indigo my-2"
                type="submit"
                disabled={processing}
              >
                Edit Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
Edit.layout = Layout;
export default Edit;
