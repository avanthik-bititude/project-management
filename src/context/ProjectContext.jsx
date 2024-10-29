import { createContext, useState } from "react";

const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  console.log(projects);
  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectContextProvider };
