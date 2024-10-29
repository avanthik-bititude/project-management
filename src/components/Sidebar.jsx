import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

const Sidebar = ({ isSelect, onProjectSelect, isProjectSelected }) => {
  const { projects } = useContext(ProjectContext);

  return (
    <div className="w-96 h-screen bg-gray-900 text-white p-6 shadow-lg">
      <h1 className="mt-7 font-mono text-3xl mb-4 font-bold underline decoration-gray-600">
        Projects
      </h1>
      <button
        onClick={isSelect}
        className="mt-6 mb-6 w-full text-white bg-gray-700 hover:bg-gray-400 hover:text-black rounded-lg py-2 transition duration-200"
      >
        + Create project
      </button>
      <div className="mt-5">
        <div className="max-h-[750px] overflow-y-auto p-2 bg-gray-800 rounded-3xl shadow-2xl">
          <ol className="list-disc list-inside space-y-2">
            {projects.map((value, index) => {
              return (
                <li key={index} className="mx-3">
                  <button
                    className="w-full text-left p-3 rounded-lg shadow-md
                   hover:bg-gray-600 hover:text-white transition duration-200 flex items-center"
                    onClick={() => {
                      onProjectSelect(value.id);
                      isProjectSelected();
                    }}
                  >
                    <span className="flex-grow">{value.projectName}</span>
                    <span className="text-gray-400 text-sm">{"->"}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
