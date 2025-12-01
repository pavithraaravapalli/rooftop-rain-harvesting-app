const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

