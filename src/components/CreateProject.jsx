import React, { useContext, useState, useId } from "react";
import { ProjectContext } from "../context/ProjectContext";
import toast, { Toaster } from "react-hot-toast";

const CreateProject = ({ isSelect }) => {
  const { projects, setProjects } = useContext(ProjectContext);

  const [project, setProject] = useState({
    id: Math.round(Math.random(0, 10) * 100),
    projectName: "",
    description: "",
  });

  const handleInputChange = (event) => {
    setProject({ ...project, [event.target.name]: event.target.value });
  };

  const handleProjectSave = (event) => {
    event.preventDefault();
    if (!project.projectName || !project.description) {
      toast.error("missing input fields");
      return false;
    } else {
      setProjects((prevItems) => [...prevItems, project]);
      toast.success("success!", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#333",
          color: "#fff",
        },
      });

      setProject({
        id: Math.round(Math.random(0, 10) * 100),
        projectName: "",
        description: "",
      });
    }
  };

  console.log(project);

  console.log("Context projects :", projects);
  return (
    <>
      <form onSubmit={handleProjectSave}>
        <div className=" mt-20 ml-20">
          <div className=" bg-white p-7 rounded-lg shadow-lg min-w-96">
            <h1 className="text-2xl font-semibold mb-4">Create Project</h1>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="">
                Project Name
              </label>
              <input
                className="border border-gray-300 rounded-lg p-2 w-full"
                type="text"
                name="projectName"
                value={project.projectName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="">
                Description
              </label>
              <input
                className="border border-gray-300 rounded-lg p-2 w-full"
                type="text"
                name="description"
                value={project.description}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="m-8 flex justify-end space-x-4 mb-6">
            <button
              className="text-black hover:bg-gray-200 p-3 rounded transition duration-200"
              onClick={isSelect}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gray-800 text-white hover:bg-gray-600 p-3 rounded-lg transition duration-200"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateProject;
