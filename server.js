const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({
    origin:"*",
    methods:['GET','POST','PUT','DELETE']
} ));


app.get("/roll", (req, res) => {
    const diceValue = Math.floor(Math.random() * 6) + 1; 
    res.json({ dice: diceValue, message: `You rolled a ${diceValue}!` });
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
