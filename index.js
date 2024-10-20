const express = require("express");
const app = express();

app.get("/", (req, res) => { 
    res.send("Welcome to abhijitmondalbuilds.in!");
});

app.listen(3000, () => { 
    console.log("Server is listening.");
});