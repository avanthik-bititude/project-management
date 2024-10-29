import React from "react";

const NoProjectSelected = ({ isSelect }) => {
  return (
    <>
      <div className="flex flex-col items-center h-1/2 bg-gray-100 text-gray-700 text-center p-6">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/data-not-found-illustration-download-in-svg-png-gif-file-formats--message-empty-communication-emptystate-no-pack-design-development-illustrations-9404367.png"
          alt="No project selected"
          className="mb-6 w-64 h-64 object-cover"
        />
        <h1 className="text-3xl font-bold mb-2">No Project Selected</h1>
        <p className="text-lg mb-2">Please select a project</p>
        <p className="text-md">Or create a project</p>
        <button
          onClick={isSelect}
          className=" ml-4 mt-5 w-40 text-white bg-gray-600 hover:bg-gray-300
       hover:text-black rounded-lg py-2 transition duration-200"
        >
          + Create Project
        </button>
      </div>
    </>
  );
};

export default NoProjectSelected;
