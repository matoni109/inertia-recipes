import React, { useState } from "react";
import { useForm, InertiaLink, usePage } from "@inertiajs/inertia-react";

const Comment = (props) => {
  const { url } = usePage();
  // const {
  //   data: { user, avatar },
  //   recipe,
  // } = props;
  console.log(props);
  return (
    <>
      <div
        className="flex bg-white flex-row mb-2 group mx-2 p-4 rounded-md text-sm"
        id="forum_post_20273"
      >
        <div className="hidden lg:block lg:mr-3 flex-shrink-0">
          <a href="/users/15712">
            <img
              data-src="http://localhost:3000/public/images/default.jpeg"
              className="rounded-full"
              alt="Gerard Donnelly"
              src="http://localhost:3000/public/images/default.jpeg"
              width="36"
              height="36"
            />
          </a>
        </div>
        <div className="min-w-0 flex-grow">
          <div className="">
            <div className="h6 my-0 flex justify-between mb-2">
              <div>
                <a
                  className="text-indigo-600 font-semibold hover:text-indigo-500"
                  href="/users/15712"
                >
                  {props.user_name}
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 text-gray-800">
                    1,830 XP
                  </span>
                </a>
                <small className="text-gray-800">
                  ·
                  <a
                    className="hover:underline"
                    href="https://gorails.com/forum/deploying-tailwind-to-aws-elastic-beanstalk#forum_post_20273"
                  >
                    <time
                      dateTime="2021-10-01T18:03:58Z"
                      data-local="time-ago"
                      title="October 2, 2021 at 4:03am AEST"
                      aria-label="Saturday at 4:03am"
                    >
                      Saturday at 4:03am
                    </time>
                  </a>
                </small>
              </div>
            </div>
            <div className="mb-2 prose">
              <p>My Comment id is {props.id}</p>
              <p>My Parent is {props.parent_id}</p>
              <p>{props.content}</p>
            </div>
          </div>
          <div className="replies"></div>
        </div>
        <div className="relative inline-block text-left">
          <div>
            <button className="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {props.children}
    </>
  );
};

export default Comment;
