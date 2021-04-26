import "./College.css";
import { FaTimes } from "react-icons/fa";

const Project = ({ project, onDelete, onToggle }) => {
  return (
    <div className="Project">
      <div className="projects">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">{project.heading}</h3>
            <FaTimes
              style={{
                cursor: "pointer",
                color: "white",
                position: "absolute",
                top: "20px",
                right: "20px",
              }}
              onClick={() => onDelete(project.id)}
            />
          </div>
          <div className="card-body">
            <p className="card-text">{project.text}</p>
            <img className="card-img" src={project.img} alt={project.heading} />
          </div>
          <div className="card-footer">
            <a className="codebtn" href={project.btn}>
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
