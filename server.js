const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.get("/wakeup", (req, res) => {
    res.json({ status: "Server is awake!" });
});

app.use(cors({
    origin: "https://rolldice-g3h0c0drf4dfafeg.uaenorth-01.azurewebsites.net", // Allow our actual domain
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// Serve static files (HTML, CSS, images)
app.use(express.static(path.join(__dirname)));

// Route for the API tester (index.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Route for the Dice Roller UI (dice-roller.html)
app.get("/dice-roller", (req, res) => {
    res.sendFile(path.join(__dirname, "dice-roller.html"));
});

// API route for rolling dice
app.get("/roll", (req, res) => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    res.json({ dice: diceValue, message: `You rolled a ${diceValue}!` });
});

// Start the server with a dynamic port for Azure
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
