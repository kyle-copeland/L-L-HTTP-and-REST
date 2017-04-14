const express = require('express');
const app = express();
const find  = require('lodash.find');
const filter = require('lodash.filter');

// This will act as our simple database
var blogs = [
  {
    "id": "1",
    "title": "WoW Blog",
    "content": "This is some content."
  },
  {
    "id": "2",
    "title": "D3 Blog",
    "content": "This is some more content"
  }
];

// Get single blog by id
// Ex. GET /blogs/1
app.get("/blogs/:id", (req, res) => {
  const blog = find(blogs, blog => blog.id == req.params.id);

  if (blog) {
    res.json(blog);
  } else {
    res.status(400).json({"error":"invalid id"});
  }
});

// Get list of all blogs
app.get("/blogs", (req, res) => {
  res.json(blogs);
});

// Delete single blog by id
// Ex. DELETE /blogs/1
app.delete("/blogs/:id", (req, res) => {
  blogs = filter(blogs, blog => blog.id != req.params.id);
  res.json(blogs);
});

// Start server
app.listen("3000", console.log("Now listening on port 3000"));
