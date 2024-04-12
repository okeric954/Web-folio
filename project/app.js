const express = require("express");
const path = require("path");
const app = express();

// Configure static directory for serving CSS, JS, images, etc.
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "src/views")));

// Define routes
app.get("/", (req, res) => {
  res.send("Hello Friends!");
});
// Start the server without specifying a port
const server = app.listen(() => {
  const port = server.address().port;
  console.log(`Server is running on port ${port}`);
});
