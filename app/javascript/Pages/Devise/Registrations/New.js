import React, { useRef } from "react";
import { useForm } from "@inertiajs/inertia-react";
import { Image, CloudinaryContext, Transformation } from "cloudinary-react";
// https://github.com/react-dropzone/react-dropzone
// https://stackoverflow.com/questions/3827011/devise-custom-routes-and-login-pages
// https://github.com/kirill3333/react-avatar
// https://medium.com/@clarkjohnson_85334/uploading-photos-into-rails-6-activestorage-from-javascript-react-file-and-camera-653de99b183f
const New = (props) => {
  const imageUploader = useRef(null);
  const uploadedImage = useRef(null);

  const { data, setData, post, processing, errors, progress } = useForm({
    user: {
      email: "",
      password: "",
      avatar: undefined,
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

  const avatarHandler = (event) => {
    document.getElementById("avatarOriginal").classList.add("hidden");

    handleImageUpload(event);
    setData((values) => ({
      user: { ...values.user, [event.target.id]: event.target.files[0] },
    }));
  };

  const valuesChangedHandler = (event) => {
    setData((values) => ({
      user: { ...values.user, [event.target.id]: event.target.value },
    }));
  };

  const style = {
    height: 100,
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
              <label className="form-label">Photo:</label>
              <div className="mt-1 flex items-center">
                <span className="inline-block h-15 w-15 rounded-full overflow-hidden bg-gray-100">
                  <div id="avatarOriginal" className="">
                    <>
                      <CloudinaryContext cloudName="dr2satryk">
                        <Image
                          cloudName="oeelsafe"
                          loading="lazy"
                          publicId={`default_aeza3u`}
                          alt={`avatar image of default`}
                        >
                          <Transformation
                            width="100"
                            height="100"
                            crop="thumb"
                            radius="max"
                            fetchFormat="png"
                            quality="auto"
                          />
                        </Image>
                      </CloudinaryContext>
                    </>
                    {/* <img
                      src="public/images/default.jpeg"
                      alt="Girl in a jacket"
                      width="100"
                      height="100"
                    /> */}
                  </div>
                </span>
                <span className="inline-block h-15 w-15 rounded-full overflow-hidden bg-gray-100">
                  <img id="avatarPreview" ref={uploadedImage} style={style} />
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

              <span>
                {progress && (
                  <progress
                    className="my-2"
                    value={progress.percentage}
                    max="100"
                  >
                    {progress.percentage}%
                  </progress>
                )}
              </span>
              <label htmlFor="text-input-11" className="form-label my-2">
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
              <label htmlFor="text-input-11" className="form-label">
                Password:
              </label>
              <input
                className="shadow appearance-none rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                value={data.password}
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
