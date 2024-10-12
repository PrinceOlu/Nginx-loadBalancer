const express = require("express");
const app = express();
const PORT = process.env.PORT || 8081;

// Middleware (optional)
app.use(express.json()); // Parse JSON bodies

// Example route
app.get("/", (req, res) => {
    res.send("Welcome to Server 1!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
