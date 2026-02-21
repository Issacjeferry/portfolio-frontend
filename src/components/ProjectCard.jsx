// eslint-disable-next-line react-refresh/only-export-components
const ProjectCard = ({ project }) => {
  return (
    <div className="border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition">
      <h3 className="text-2xl font-semibold mb-3">
        {project.title}
      </h3>

      <p className="text-gray-400 mb-4">
        {project.description}
      </p>

      <div className="text-sm mb-4 text-gray-300">
        <span className="font-semibold">Tech Stack:</span> {project.technologies}
      </div>

      <div className="flex gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            GitHub →
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            className="text-green-400 hover:underline"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
};
