import React, { useState } from "react";
import { useForm, InertiaLink, usePage } from "@inertiajs/inertia-react";

const AddComment = (props) => {
  const { url } = usePage();
  const {
    data: { user, avatar },
    recipe,
  } = props.props;

  const findCommentable = (url) => {
    // const url = "/recipes/457";
    const urlOnSplit = url.split("/").slice(1);
    const commentableType = urlOnSplit[0].replace(/s$/g, "");
    const capitalizeFirstChar = (str) =>
      str.charAt(0).toUpperCase() + str.substring(1);

    const commentableObject = {
      commentableType: capitalizeFirstChar(commentableType),
      commentableId: parseFloat(urlOnSplit[1]),
    };

    return commentableObject;
  };
  // console.log(props.props);

  const { data, setData, post, errors } = useForm({
    comment: {
      body: "",
      parent_id: undefined, // nill or above comment ??
      commentable_type: findCommentable(url).commentableType, // use url to get this Recipe
      commentable_id: findCommentable(url).commentableId, // could use above also ??
      user_id: user.id, // user.id
    },
  });

  // const [username, setUsername] = useState("");
  // const [comment, setComment] = useState("");
  // console.log(errors);
  const valuesChangedHandler = (event) => {
    errors.body = false;
    setData((values) => ({
      comment: { ...values.comment, [event.target.id]: event.target.value },
    }));
  };

  const submitHandler = (event) => {
    // console.log(event);
    // need to check if there is a parent_id here
    event.preventDefault();
    post(`${url}/comments`, { preserveScroll: true });

    setData((values) => ({
      comment: { ...values.comment, body: "" },
    }));
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
            defaultValue={user.name}
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
            value={data.comment.body}
            onChange={valuesChangedHandler}
          />
          {errors.body && (
            <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>{errors.body}</p>
            </div>
          )}
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
