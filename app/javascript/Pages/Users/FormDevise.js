import React from "react";
import { useForm } from "@inertiajs/inertia-react";

const FormDevise = (props) => {
  console.log(props);
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  // const userData = {
  //   user: {
  //     email: "M@m.com",
  //     password: "1234561111",
  //   },
  // };

  function submit(e) {
    e.preventDefault();
    console.log(data);
    post("/new", data);
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
            className="mt-8 bg-white rounded-lg shadow-xl overflow-hidden"
            onSubmit={submit}
          >
            <div className="px-10 py-12">
              <h1 className="text-center font-bold text-3xl">
                New User Registration
              </h1>
              <div className="mx-auto mt-6 w-24 border-b-2" />
              <label htmlFor="text-input-11" className="form-label">
                Email:
              </label>
              <input
                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
              />
              {errors.email && <div>{errors.email}</div>}
              <label htmlFor="text-input-11" className="form-label">
                Password:
              </label>
              <input
                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
              />
              {errors.password && <div>{errors.password}</div>}

              <button
                className="btn-indigo"
                type="submit"
                disabled={processing}
              >
                Sign Up
              </button>
            </div>
          </form>
          {/* <template>
        <form>
          <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
            <input
              v-model="form.user.first_name"
              class="pr-6 pb-8 w-full lg:w-1/2"
              label="First name"
            />
            <input
              v-model="form.user.last_name"
              class="pr-6 pb-8 w-full lg:w-1/2"
              label="Last name"
            />
            <input
              v-model="form.user.email"
              class="pr-6 pb-8 w-full lg:w-1/2"
              label="Email"
            />
            <input
              v-model="form.user.password"
              class="pr-6 pb-8 w-full lg:w-1/2"
              type="password"
              autocomplete="new-password"
              label="Password"
            />
            <input
              v-model="form.user.owner"
              class="pr-6 pb-8 w-full lg:w-1/2"
              label="Owner"
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </input>
            <input
              v-model="form.user.photo"
              class="pr-6 pb-8 w-full lg:w-1/2"
              type="file"
              accept="image/*"
              label="Photo"
            />
          </div>
          <slot />
        </form>
      </template> */}
        </div>
      </div>
    </>
  );
};
FormDevise.layout = null;
export default FormDevise;
