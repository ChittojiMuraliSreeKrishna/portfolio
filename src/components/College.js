import Project from "./Project";
import "./College.css";
const College = ({ projects, onDelete, onToggle }) => {
  return (
    <div className="College" id="college">
      <h2 className="projects__title">College Projects</h2>
      <div className="college-body">
        {projects.map((project) => (
          <Project
            key={project.id}
            project={project}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default College;
