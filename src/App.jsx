import "./App.css";
import Sidebar from "./components/Sidebar";
import CreateProject from "./components/CreateProject";
import { useContext, useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import { Toaster } from "react-hot-toast";
import ProjectDetails from "./components/ProjectDetails";
import { ProjectContext } from "./context/ProjectContext";

function App() {
  const [isSelected, setIsSelected] = useState(false);
  const [isSelectedProject, setIsSelectedProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects } = useContext(ProjectContext);

  const handleIsSelect = () => {
    setIsSelectedProject(false);
    setIsSelected((prev) => !prev);
  };

  const isProjectSelected = () => {
    setIsSelected(false);
    setIsSelectedProject(true);
  };

  const handleSelectedProject = (id) => {
    console.log(id);
    const item = projects.find((item) => item.id === id);
    setSelectedProject(item);
  };

  console.log(selectedProject);

  return (
    <>
      <Toaster />
      <div className=" flex ">
        <Sidebar
          isSelect={handleIsSelect}
          onProjectSelect={handleSelectedProject}
          isProjectSelected={isProjectSelected}
        />
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          {isSelected ? (
            <CreateProject isSelect={handleIsSelect} />
          ) : (
            !isSelectedProject && (
              <NoProjectSelected isSelect={handleIsSelect} />
            )
          )}
          {isSelectedProject && <ProjectDetails project={selectedProject} />}
        </div>
      </div>
    </>
  );
}

export default App;
