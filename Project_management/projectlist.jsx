import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Projects</h2>
      {projects.map(project => (
        <div key={project.id} className="bg-white p-4 mb-2 shadow rounded">
          <Link to={`/project/${project.id}`} className="text-blue-600 font-bold">
            {project.name}
          </Link>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
