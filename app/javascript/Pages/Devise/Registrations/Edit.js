import React, { useRef } from "react";
import { useForm } from "@inertiajs/inertia-react";
import Layout from "~/Components/Layout";
import AvatarCloudinary from "~/Components/AvatarCloudinary";

const Edit = (props) => {
  const imageUploader = useRef(null);
  const uploadedImage = useRef(null);

  const { data, setData, patch, processing, errors, progress } = useForm({
    user: {
      avatar: null,
      name: props.user.name,
      email: props.user.email,
      password: "",
      password_confirmation: "",
      current_password: "",
    },
  });

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  // [:password, :password_confirmation, :current_password]
  const valuesChangedHandler = (event) => {
    setData((values) => ({
      user: { ...values.user, [event.target.id]: event.target.value },
    }));
  };

  const avatarHandler = (event) => {
    document.getElementById("avatarOriginal").classList.add("hidden");

    handleImageUpload(event);
    setData((values) => ({
      user: { ...values.user, [event.target.id]: event.target.files[0] },
    }));
  };

  function submit(e) {
    e.preventDefault();
    patch("/edit");
  }

  // needed for form
  //
  //
  // https://www.nopio.com/blog/upload-files-with-rails-active-storage/

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
                Edit User Registration
              </h1>
              {/* <AlertForm props={flash} /> */}
              <div className="mx-auto mt-6 w-24 border-b-2" />
              <div>
                <label className="form-label">Photo:</label>
                <div className="mt-1 flex items-center">
                  <span className="inline-block h-15 w-15 rounded-full overflow-hidden bg-gray-100">
                    <div id="avatarOriginal" className="">
                      <AvatarCloudinary userData={props.data.avatar} />
                    </div>
                  </span>
                  <span className="inline-block h-15 w-15 rounded-full overflow-hidden bg-gray-100">
                    <img
                      id="avatarPreview"
                      ref={uploadedImage}
                      className="h-15 w-15 rounded-full overflow-hidden "
                    />
                    {progress && (
                      <progress value={progress.percentage} max="100">
                        {progress.percentage}%
                      </progress>
                    )}
                  </span>

                  <label htmlFor="text-input-11" className="form-label">
                    <input
                      type="file"
                      id="avatar"
                      className="hidden"
                      onChange={avatarHandler}
                      ref={imageUploader}
                    />
                  </label>

                  <button
                    type="button"
                    onClick={() => imageUploader.current.click()}
                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Change
                  </button>
                </div>
              </div>
              <label htmlFor="text-input-11" className="form-label my-2">
                Name:
              </label>
              <input
                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="name"
                value={data.user.name}
                onChange={valuesChangedHandler}
              />
              {errors.name && (
                <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>{errors.name}</p>
                </div>
              )}

              <label htmlFor="text-input-11" className="form-label">
                Email:
              </label>
              <input
                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="email"
                value={data.user.email}
                onChange={valuesChangedHandler}
              />
              {errors.email && (
                <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>{errors.email}</p>
                </div>
              )}

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
                onChange={valuesChangedHandler}
              />
              {errors.password && (
                <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>{errors.password}</p>
                </div>
              )}

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
                onChange={valuesChangedHandler}
              />
              {errors.password_confirmation && (
                <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>{errors.password_confirmation}</p>
                </div>
              )}

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
