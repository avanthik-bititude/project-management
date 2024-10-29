import React, { useContext, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";

const ProjectDetails = ({ project }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Project Name: {project.projectName}
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        Project Description: {project.description}
      </p>
    </div>
  );
};

export default ProjectDetails;
