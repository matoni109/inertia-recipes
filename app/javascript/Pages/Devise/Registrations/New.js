import React from "react";
import { useForm } from "@inertiajs/inertia-react";
// import AlertForm from "~/Components/AlertForm";

// https://github.com/react-dropzone/react-dropzone
// https://stackoverflow.com/questions/3827011/devise-custom-routes-and-login-pages
// https://github.com/kirill3333/react-avatar
// https://medium.com/@clarkjohnson_85334/uploading-photos-into-rails-6-activestorage-from-javascript-react-file-and-camera-653de99b183f
const New = (props) => {
  // const { flash } = usePage().props;

  const { data, setData, post, processing, errors, progress } = useForm({
    user: {
      email: "",
      password: "",
      avatar: undefined,
    },
  });

  const valuesChangedHandler = (event) => {
    setData((values) => ({
      user: { ...values.user, [event.target.id]: event.target.value },
    }));
  };
  // [event.target.id]: event.target.files[0],
  const avatarHandler = (event) => {
    // console.log(event.target.files[0]);
    setData((values) => ({
      user: { ...values.user, [event.target.id]: event.target.files[0] },
    }));
  };

  function submit(e) {
    e.preventDefault();
    post("/new");
  }
  return (
    <>
      <div className="p-6 bg-indigo-800 min-h-screen flex justify-center items-center">
        <div className="w-full max-w-md">
          <span
            className="block mx-auto w-full max-w-xs fill-white"
            height="50"
          />
          <form
            encType="multipart/form-data"
            className="mt-8 bg-white rounded-lg shadow-xl overflow-hidden"
            onSubmit={submit}
          >
            <div className="px-10 py-12">
              <h1 className="text-center font-bold text-3xl">
                {props.title}
                New User Registration
              </h1>
              {/* <AlertForm props={props.flash} /> */}
              <div className="mx-auto mt-6 w-24 border-b-2" />
              <label htmlFor="text-input-11" className="form-label">
                Avatar:
                <input
                  type="file"
                  id="avatar"
                  class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  // value={data.user.avatar}
                  // onChange={(e) => setData("avatar", e.target.files[0])}
                  onChange={avatarHandler}
                />
                {progress && (
                  <progress value={progress.percentage} max="100">
                    {progress.percentage}%
                  </progress>
                )}
              </label>
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
              <label htmlFor="text-input-11" className="form-label">
                Password:
              </label>
              <input
                className="shadow appearance-none rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
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

              <button
                className="btn-indigo my-2"
                type="submit"
                disabled={processing}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
New.layout = null;
export default New;
