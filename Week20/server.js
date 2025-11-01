// server.js

const express = require("express");
const app = express();

// Middleware to parse JSON data from requests
app.use(express.json());

// Simulated database (in-memory array)
let posts = [
  { id: 1, title: "First Post", content: "Hello world!" },
  { id: 2, title: "Second Post", content: "Express makes APIs easy!" }
];

//  GET /posts - Return all posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

//  GET /posts/:id - Return a single post by ID
app.get("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json(post);
});

//  POST /posts - Create a new post
app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title,
    content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

//  PUT /posts/:id - Update an existing post
app.put("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  const { title, content } = req.body;
  if (title) post.title = title;
  if (content) post.content = content;

  res.json(post);
});

//  DELETE /posts/:id - Delete a post
app.delete("/posts/:id", (req, res) => {
  const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  posts.splice(postIndex, 1);
  res.json({ message: "Post deleted successfully" });
});

//  Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

//  Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

//  Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
