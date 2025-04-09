const API_URL = 'http://localhost:5000/posts';

function createPost() {
  const username = document.getElementById('username').value;
  const content = document.getElementById('postContent').value;
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, content })
  })
  .then(() => {
    document.getElementById('postContent').value = '';
    fetchPosts();
  });
}

function fetchPosts() {
  fetch(API_URL)
    .then(res => res.json())
    .then(posts => {
      const postsDiv = document.getElementById('posts');
      postsDiv.innerHTML = '';
      posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.className = 'post';
        postEl.innerHTML = `<strong>${post.username}</strong><p>${post.content}</p>`;
        postsDiv.appendChild(postEl);
      });
    });
}

window.onload = fetchPosts;
