const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const projects = [
  {
    id: 1,
    name: 'Website Redesign',
    description: 'Revamp the existing marketing website.',
    tasks: [
      { id: 1, title: 'Design Mockups', status: 'In Progress', assignedTo: 'Alice', comments: ['Initial draft done'] },
      { id: 2, title: 'Frontend Implementation', status: 'Pending', assignedTo: 'Bob', comments: [] }
    ]
  },
  {
    id: 2,
    name: 'Mobile App Launch',
    description: 'Launch MVP version of mobile app.',
    tasks: [
      { id: 3, title: 'Beta Testing', status: 'Completed', assignedTo: 'Charlie', comments: ['All test cases passed'] },
    ]
  }
];

app.get('/projects', (req, res) => {
  res.json(projects);
});

app.get('/projects/:id', (req, res) => {
  const project = projects.find(p => p.id == req.params.id);
  if (project) res.json(project);
  else res.status(404).send('Project not found');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
