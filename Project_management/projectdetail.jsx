import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`)
      .then(res => res.json())
      .then(data => setProject(data));
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
      <p className="mb-4">{project.description}</p>
      <h3 className="text-lg font-semibold">Tasks</h3>
      <ul>
        {project.tasks.map(task => (
          <li key={task.id} className="bg-gray-100 p-2 my-1 rounded">
            <p><strong>{task.title}</strong></p>
            <p>{task.status}</p>
            <p className="text-sm italic">Assigned to: {task.assignedTo}</p>
            <p className="text-xs mt-2">Comments: {task.comments.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}