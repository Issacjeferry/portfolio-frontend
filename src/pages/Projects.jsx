import { useEffect, useState } from "react";
import API from "../api/api";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.error("Error fetching projects", err);
      });
  }, []);

  return (
  <div>
    <h2 className="text-3xl font-semibold mb-6">Projects</h2>

    {projects.length === 0 ? (
      <p>No projects found</p>
    ) : (
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    )}
  </div>
);

};

export default Projects;
