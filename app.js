const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("It is root");
});

app.get("/login", (req, res) => {
    res.send("It is a login pasge")
});

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});