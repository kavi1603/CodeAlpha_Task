const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let posts = [];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  const { username, content } = req.body;
  if (username && content) {
    posts.unshift({ username, content });
    res.status(201).json({ message: 'Post created' });
  } else {
    res.status(400).json({ error: 'Username and content are required' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
