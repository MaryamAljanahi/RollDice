const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// CORS configuration
app.use(cors({
    origin: "https://rollingdicestorageacc.z1.web.core.windows.net", // Your Azure Static Website URL
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// Serve static files (HTML, CSS, images)
app.use(express.static(path.join(__dirname, "public")));

// API route for rolling the dice
app.get("/roll", (req, res) => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    res.json({ dice: diceValue, message: `You rolled a ${diceValue}!` });
});

// Default route for index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server with a dynamic port for Azure
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});