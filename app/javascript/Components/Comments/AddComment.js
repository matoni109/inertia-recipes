import React, { useState } from "react";
import { useForm, InertiaLink, usePage } from "@inertiajs/inertia-react";

const AddComment = (props) => {
  const { url } = usePage();
  console.log(props);

  console.log(url);

  const { data, setData, post, processing, errors } = useForm({
    comment: {
      body: "",
      parent_id: undefined, // nill or above comment ??
      commentable_type: findCommentableType(url), // use url to get this Recipe
      commentable_id: undefined, // could use above also ??
      user_id: undefined, // user.id
    },
  });
  //  user_id: nil,
  //  commentable_type: nil,
  //  commentable_id: nil,
  //  parent_id: nil,
  //  body: nil,

  // const [username, setUsername] = useState("");
  // const [comment, setComment] = useState("");

  const findCommentableType = (url) => {
    // const url = "/recipes/457";
    const urlOnSplit = url.split("/").slice(1);
    const commentableType = urlOnSplit[0].replace(/s$/g, "");

    const capitalizeFirstChar = (str) =>
      str.charAt(0).toUpperCase() + str.substring(1);

    console.log(capitalizeFirstChar(commentableType));
    return capitalizeFirstChar(commentableType);
  };
  const valuesChangedHandler = (event) => {
    setData((values) => ({
      comment: { ...values.comment, [event.target.id]: event.target.value },
    }));
  };

  const submitHandler = (event) => {
    console.log("ya");
    // need to check if there is a parent_id here
    e.preventDefault();
    post("/new");
    // url == /recipes/457
    // POST   /recipes/:recipe_id/comments(.:format)
  };

  return (
    <div className="w-full">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={submitHandler}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Jon Snow"
            // onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="comment"
          >
            Comment
          </label>
          <textarea
            name="comment"
            id="body"
            className="font-sans shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={2}
            placeholder="Tell me what you think 😊"
            // value={comment}
            // onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded border border-transparent focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
