const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// static files (HTML, CSS, images)
app.use(express.static(path.join(__dirname)));

// API route for rolling the dicee
app.get("/roll", (req, res) => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    res.json({ dice: diceValue, message: `You rolled a ${diceValue}!` });
});

// default route for index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// start the server with a dynamic port for Azure
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});