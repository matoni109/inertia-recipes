import React from "react";

const AlertForm = (props) => {
  console.log(props);
  return (
    <>
      {props.props.alert && (
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
          <span className="text-red-800">{props.props.alert}</span>
        </div>
      )}
      {props.props.success && (
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
          <span className="text-blue-800">{props.props.success}</span>
        </div>
      )}
    </>
  );
};

export default AlertForm;
